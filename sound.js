var isPlaying = true;

function playOrPause() {
  if (isPlaying) {
    myAudiothree.pause();
    isPlaying = false;
  } else {
    myAudiothree.play();
    isPlaying = true;
  }
}

//plays automatically
myAudiothree = new Audio('media/deepspace.mp3');
myAudiothree.loop = true;
myAudiothree.play();

//woosh sound
function PlayDisappearSound() {
  myAudio = new Audio('media/disappearsound.mp3');
  myAudio.loop = false;
  myAudio.play();
}

//blackhole sound
function PlayBlackHoleSound() {
  myAudiotwo = new Audio('media/blackholesound.wav');
  myAudiotwo.loop = true;
  myAudiotwo.play();
}