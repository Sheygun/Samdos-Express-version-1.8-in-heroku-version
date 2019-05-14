(function($) {
  var pendingAjaxRequests = 0;
  var callbackTimeoutHandles = [];
  
  function showWaitCursor() {
    var $body = $('body', this.$window[0].document),
    $waitCursorDiv = $('<div id="waitCursor" />'),
    styles = { zIndex: 2147483647, position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 };
    
    $body.data('height-before-wait', $body.css('height'));
    $body.css('height', this.$window.height() - ($body.css('paddingTop') + $body.css('paddingBottom')));
    $body.append($waitCursorDiv);
    
    if (this.content) {
      $waitCursorDiv.append(this.content);
    }
    
    if (this.cssClass) {
      $waitCursorDiv.addClass(this.cssClass);
    } else {
      styles.cursor = 'wait';
      styles.backgroundColor = 'white';
      styles.opacity = 0;
    }
    
    $waitCursorDiv.css(styles);
  }
  
  function hideWaitCursor() {
    var $body = $('body', this.$window[0].document);
    var $waitCursorDiv = $body.find('#waitCursor');
    $body.css('height', $body.data('height-before-wait'));
    $waitCursorDiv.remove();
  }
  
  var defaultOpts = {
    callbacks: {
      start: showWaitCursor,
      stop: hideWaitCursor
    },
    ajaxStartFunctions: [],
    ajaxStopFunctions: [],
    delay: 500,
    timeout: 60000,
    cssClass: undefined,
    content: undefined
  };
  
  $.fn.wait = function(opts) {
    if (opts && opts.callbacks) {
      opts.callbacks = $.extend({}, defaultOpts.callbacks, opts.callbacks);
    }
    
    opts = $.extend({}, defaultOpts, opts);
    
    this.each(function() {
      if ($.isWindow(this)) {
        var $window = $(this),
        $document = $(this.document),
        proxyThis = {
          cssClass: opts.cssClass,
          content: opts.content,
          $window: $window
        };
        
        var delayProxies = $.map(opts.callbacks, function(p, k) {
          var delay = parseInt(k);
          
          if (delay) {
            return {
              delay: delay,
              proxy: $.proxy(p, proxyThis)
            };
          } else {
            return null;
          }
        });
        
        var startProxy = $.proxy(function() {
          pendingAjaxRequests++;
          if (pendingAjaxRequests < 2) {
            opts.callbacks.start.apply(this);
            $.each(delayProxies, function(i, p) {
              callbackTimeoutHandles.push(setTimeout(p.proxy, p.delay));
            });
          }
        }, proxyThis);
        
        var stopProxy = $.proxy(function() {
          pendingAjaxRequests--;
          if (pendingAjaxRequests < 1) {
            $.each(callbackTimeoutHandles, function(i, h) {
              clearTimeout(h);
            });
            pendingAjaxRequests = 0;
            callbackTimeoutHandles = [];
            opts.callbacks.stop.apply(this);
          }
        }, proxyThis);
        
        if (opts.ajaxStartFunctions.length === 0) {
          opts.ajaxStartFunctions.push($.proxy($document.ajaxStart, $document));
        }
        if (opts.ajaxStopFunctions.length === 0) {
          opts.ajaxStopFunctions.push($.proxy($document.ajaxStop, $document));
        }
        
        $.each(opts.ajaxStartFunctions, function(i, f) {
          f(function() {
            var delay = typeof (opts.delay) === 'function' ? opts.delay() : opts.delay;
            var timeout = typeof (opts.timeout) === 'function' ? opts.timeout() : opts.timeout;
            callbackTimeoutHandles.push(setTimeout(startProxy, delay));
            callbackTimeoutHandles.push(setTimeout(stopProxy, timeout));
          });
        });
        
        $.each(opts.ajaxStopFunctions, function(i, f) {
          f(stopProxy);
        });
        
        try {
          if ($window.didustay) {
            $window.didustay(stopProxy);
          }
          $window.on('beforeunload', function(e) {
            var delay = typeof (opts.delay) === 'function' ? opts.delay() : opts.delay;
            var timeout = typeof (opts.timeout) === 'function' ? opts.timeout() : opts.timeout;
            callbackTimeoutHandles.push(setTimeout(startProxy, delay));
            $.each(delayProxies, function (i, p) {
              callbackTimeoutHandles.push(setTimeout(p.proxy, p.delay));
            });
            callbackTimeoutHandles.push(setTimeout(stopProxy, timeout));
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        throw new Error('waitforit only works for window object!');
      }
    });
  };
})(jQuery);
