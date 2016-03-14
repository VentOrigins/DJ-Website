
$( document ).ready(function() {

	$('.btn').click(function() {
		$(this).toggleClass('clicked');
	});

	

});

function play(number) {
        var myAudio = document.getElementById("myAudio" + number);
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
};


