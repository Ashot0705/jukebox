$(document).ready(function() {

	$('.playButton').click(function() {
		jukebox.play()
	})
	$('.pauseButton').click(function() {
		jukebox.pause()
	})
	$('.stopButton').click(function() {
		jukebox.stop()
	})
	$('.nextButton').click(function() {
		jukebox.next()
	})
	$('.prevButton').click(function() {
		jukebox.prev()
	})
	$(".load-btn").click(function() {
		jukebox.load()
	})
})
var jukebox = new Jukebox()

currentSong = 0
songs = ["boa-noite.mp3", "piano.mp3", "florida.mp3"]
audio = document.getElementsByClassName("audio")[0]

function Jukebox() {

	this.play = function () {
		$(".songInfo").append(songs[currentSong])	
		console.log(songs[currentSong])
		audio.src = songs[currentSong]
		audio.play()
	}
	this.pause = function() {
		$(".songInfo").empty()
		$(".songInfo").append(songs[currentSong])
		audio.pause()
	}

	this.stop = function() {
		$(".songInfo").empty()
		audio.currentTime = 0
		audio.pause()
	}

	this.next = function() {

		currentSong = (currentSong + 1)%songs.length
		console.log(songs[currentSong])
		audio.src = songs[currentSong]

		$(".songInfo").empty()
		$(".songInfo").append(songs[currentSong])	

		audio.play()
	}

	this.prev = function() {
	if (((currentSong - 1) >= 0)) {
		

		currentSong = currentSong - 1
		console.log(songs[currentSong])
		audio.src = songs[currentSong]

		$(".songInfo").empty()
		$(".songInfo").append(songs[currentSong])	

		audio.play()
	} else {
		currentSong = 0
		console.log(currentSong)
		audio.src = songs[currentSong]
		audio.play()
	}
	}
	this.load = function() {
		var songUrl = $(".music-title").val()
		songs.push(songUrl)
		console.log(songUrl)
		audio.load()
}
}