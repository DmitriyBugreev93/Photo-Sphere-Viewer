$(function(){

  let filter = $('[data-filter]');

  filter.on('click', function(e){
    e.preventDefault();

    let cat = $(this).data('filter');
    $('[data-cat]').each(function(){
      let workCat = $(this).data('cat');
     if(workCat = cat) {
      $(this).addClass('active');
      $('body').addClass('lock');
     }
    });
  });

  $('.popup-img-close').on('click', function(){
    $('.popup-img-sec').removeClass('active');
  })

});

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



  /* ======================================================== */


  var PSV = new PhotoSphereViewer({
    panorama: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/1.png',
    container: 'photosphere',
    loading_img: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/1.png',
    navbar: 'autorotate zoom download fullscreen',
    caption: 'Foto da sala',
    default_fov: 100,
    mousewheel: false,
    size: {
      height: 550
    }
  });

  var PSV2 = new PhotoSphereViewer({
    panorama: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/2.png',
    container: 'photosphere2',
    loading_img: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/2.png',
    navbar: 'autorotate zoom download fullscreen',
    caption: 'Foto da sala',
    default_fov: 100,
    mousewheel: false,
    size: {
      height: 550
    }
  });

  var PSV3 = new PhotoSphereViewer({
    panorama: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/3.png',
    container: 'photosphere3',
    loading_img: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/3.png',
    navbar: 'autorotate zoom download fullscreen',
    caption: 'Foto da sala',
    default_fov: 100,
    mousewheel: false,
    size: {
      height: 550
    }
  });

  var PSV4 = new PhotoSphereViewer({
    panorama: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/4.png',
    container: 'photosphere4',
    loading_img: 'https://dmitriybugreev93.github.io/Photo-Sphere-Viewer/img/4.png',
    navbar: 'autorotate zoom download fullscreen',
    caption: 'Foto da sala',
    default_fov: 100,
    mousewheel: false,
    size: {
      height: 550
    }
  });


});




