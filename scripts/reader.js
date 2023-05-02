$(document).ready(function () {
    window.onkeydown = function (event) {
        console.log(event.code);
        if (event.code === 'Space') {
            event.preventDefault();
        }
        };
    document.addEventListener('keydown', function (e) {
        $("*:not(body)").hover(
        function (ev) {
            if (e.code == '' || e.code == 'Space' || e.code == 'Unidentified') {
                if ($(this).attr('alt')) {  
                    speechSynthesis.speak(new SpeechSynthesisUtterance($(this).attr("alt")))
                } 
                else if ($(this).attr('src')) {
                    speechSynthesis.speak(new SpeechSynthesisUtterance($(this).attr("src")))
                } 
            else {
                speechSynthesis.speak(new SpeechSynthesisUtterance($(this).text()))
            }
            $(this).addClass("highlight")
            ev.stopPropagation();
            }
            else {
            speechSynthesis.cancel();
            $(".highlight").removeClass('highlight')
            }
        },
    function (ev) {
        speechSynthesis.cancel();
        $(this).removeClass("highlight")
        $(".highlight").removeClass('highlight')
    })
    })
});
    