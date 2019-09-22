var propose = document.querySelector('.propose__button');
var goal = document.querySelector('.goal__button');
var popup = document.querySelector('.modal-form');
var overlay = document.querySelector('.modal-overlay');
var modalClose = document.querySelector('.modal-close');
var cookie = document.querySelector('.modal-cookie');
var cookieClose = document.querySelector('.cookie-close');
var form = popup.querySelector('form');
var formErorr = document.querySelector('.form-erorr');
var devEmail = document.querySelector('[name=email]');
var firstName = popup.querySelector('[name=firstname]');
var phone = popup.querySelector('[name=phone]');
var email = popup.querySelector('[name=email]');
var video = document.querySelector('.modal-video');
var playBtn = document.querySelector('.modal-video__button');
var videoClose = document.querySelector('.video-close');
var vid = document.getElementById('myVideo');
// var pictureInPicture = document.querySelector('.vjs-picture-in-picture-control');


// var player = videojs('my-player');

// var options = {};

// var player = videojs('my-player', options, function onPlayerReady() {
//   videojs.log('Your player is ready!');

//   // In this context, `this` is the player that was created by Video.js.
//   this.play();

//   // How about an event listener?
//   this.on('ended', function() {
//     videojs.log('Awww...over so soon?!');
//   });
// });

  playBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    video.classList.add('video-show');
    vid.volume = 0.2;
    setTimeout(function(){
      document.getElementById('myVideo').play();
        }, 500);
    if(window.innerWidth>=768) {
      overlay.classList.add('modal-overlay-show');
    }
  });

  // pictureInPicture.addEventListener('click', function (evt) {
  //   evt.preventDefault();
  //   video.classList.remove('video-show');
  //   overlay.classList.remove('modal-overlay-show');
  // });

  videoClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.getElementById('myVideo').pause();
    video.classList.remove('video-show');
    overlay.classList.remove('modal-overlay-show');
  });

  propose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('modal-overlay-show');
    firstName.focus();
  });

  goal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('modal-overlay-show');
    firstName.focus();
  });

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('modal-overlay-show');
    popup.classList.remove('modal-error');
  });

  cookieClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    cookie.classList.remove('cookie-show');
  });

  form.addEventListener('submit', function (evt) {
    if (!firstName.value || !phone.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      setTimeout(function() { popup.classList.add('modal-error') }, 1);
    }
  });

  formErorr.addEventListener('submit', function (evt) {
    if (!devEmail.value) {
      evt.preventDefault();
      devEmail.classList.remove('modal-error');
      setTimeout(function() { devEmail.classList.add('modal-error') }, 1);
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
        if (popup.classList.contains('modal-show')) {
          popup.classList.remove('modal-show');
          overlay.classList.remove('modal-overlay-show');
          popup.classList.remove('modal-error');
      }
        if (video.classList.contains('video-show')) {
          overlay.classList.remove('modal-overlay-show');
          document.getElementById("my-player_html5_api").pause();
          video.classList.remove('video-show');
      }
    }
  });

  // Modernizr.on('webp', function (result) {
  //   if (result) {
  //     // supported
  //   } else {
  //     // not-supported
  //   }
  // });

  document.documentElement.classname += (Modernizr.webp ? "webp" : "no-webp");
  document.documentElement.classList.remove("no-js");
