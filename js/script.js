
document.addEventListener("DOMContentLoaded", function () {

  let downloadBtn = document.getElementById('btndownload');
  let popupForm = document.querySelector('.popup-form-wrap');
  let closeBtnForm = document.getElementById('popup-form-close');

  downloadBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popupForm.classList.add('active');
    document.querySelector('body').classList.add('lock');
  });
  closeBtnForm.addEventListener('click', function () {
    popupForm.classList.remove('active');
    document.querySelector('body').classList.remove('lock');
  });

  let m1Btn = document.getElementById('m1');
  let popupImg = document.querySelector('.popup-img-sec');
  let closeBtnImg = document.querySelector('.popup-img-close');

  m1Btn.addEventListener('click', function (e) {
    e.preventDefault();
    popupImg.classList.add('active');
    document.querySelector('body').classList.add('lock');
  });
  closeBtnImg.addEventListener('click', function () {
    popupImg.classList.remove('active');
    document.querySelector('body').classList.remove('lock');
  });


  /* ======================================================== */


  var PSV = new PhotoSphereViewer({
    panorama: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/3.png',
    container: 'photosphere',
    loading_img: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/3.png',
    navbar: 'autorotate zoom download fullscreen',
    caption: 'Foto da sala',
    default_fov: 100,
    mousewheel: false,
    size: {
      height: 550
    }
  });


});




