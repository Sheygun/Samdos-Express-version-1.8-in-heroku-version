# jquery-waitforit
jQuery plugin that shows wait mouse cursor during ajax requests

## Usage
**Using defaults:**
```
$(window).wait();
```

**Applying options:**
```
$(window).wait({
  callbacks: [
    3000: function () {
      $('#sorry').html('Sorry to keep you waiting :( ...');
    }
  ],
  content: '<div id="sorry">This should only take a moment...</div>'
  cssClass: 'waitforit',
  delay: 0,
  timeout: 30000
});
```

## Demo
http://jsfiddle.net/ossipoff/w4q27gt2/show
