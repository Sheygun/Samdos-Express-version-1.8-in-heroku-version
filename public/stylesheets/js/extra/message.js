
        document.addEventListener('DOMContentLoaded', function (event) {

            var dataText = [
                "Samdos is Recruiting Web Developers, Good Teachers accross all Departments who has the capability of Teaching Private and Public Classes in Their Tertiary Institutions. Send an Email to sheygun@aol.com Now ",
                "Do you want to Become an Ambassador for Samdos in your department, why not send us message now and be among the successful Ambassadors. Send an Email to sheygun@aol.com Now",
                "Be among The first 20 people to get Space in our e-Multi Purpose Market by Contacting Us."
            ];
            function typeWriter(text, i, fnCallback) {
                if (i < (text.length)) {
                    document.getElementById("text").innerHTML = text.substring(0, i + 1) +
                        '<span aria-hidden="true" class="banner_text_w3ls"></span>';
                    setTimeout(function () {
                        typeWriter(text, i + 1, fnCallback)
                    }, 150);
                }
                else if (typeof fnCallback == 'function') {
                    setTimeout(fnCallback, 3000);
                }
            }
            function StartTextAnimation(i) {
                if (i < dataText[i].length) {
                    typeWriter(dataText[i], 0, function () {
                        StartTextAnimation(i + 1);
                    });
                }
            }
            StartTextAnimation(0);
        });