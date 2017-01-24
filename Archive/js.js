$(document).ready(function() {

var jukebox = new Jukebox()

$('.playButton').click(function() {
	jukebox.play()
})
$('.pauseButton').click(function() {
	jukebox.pause()
})
// $('.stopButton').click(function() {
// 	jukebox.stop()
// })
$('.nextButton').click(function() {
	jukebox.next()
})




function Jukebox() {
	this.play = function () {
		$('#audio').play()
	}
	this.pause = function() {
		$('#audio').pause()
	}

	this.stop = function() {
		$('#audio').stop()
	}
	this.next = function() {
		$('#audio').next()
	}
	this.load = function() {
		$('#audio').load()
	}
}

})




// $(".playButton").click(function() {
// 	audio.play();

// 	var duration = $("#mduration")
// 	duration.empty()

// 	duration.append(audio.duration)
// })
// $(".pauseButton").click(function() {
// 	audio.pause();
// })

// $(".nextButton").click(function() {
// 	audio.next();
// })

// $(".stopButton").click(function() {
// 	audio.currentTime = 0;
// 	audio.pause();
// })



// })
