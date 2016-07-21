$(document).ready(function () {


  $('.menu').fadeIn();
  $('.menu li').hide();
  $('.menu svg').click(function () {
    var didRotate = (this.style.transform == "rotate(90deg)");
    var rotateValue = (didRotate) ? '0deg' : '90deg';

    $(this).transition({
      rotate: rotateValue
    });

    if (didRotate) {
      $('.menu-svg').css('stroke', '#95989A');
      $('.menu rect').css('fill', '#95989A');
      $('.menu li').hide(500, 'linear');
    } else {
      $('.menu-svg').css('stroke', '#000');
      $('.menu rect').css('fill', '#000');
      $('.menu li').show(500, 'linear');
    }
  });

  $('.menu span').hover(function () {
    $(this).css('color', '#000');
  }, function () {
    $(this).css('color', '#95989A');
  });

  $('.img-content').hide();


  $('.img-item').hover(function () {
    $(this).siblings().show();
    $(this).css('opacity', '0.8');
  }, function () {
    $(this).siblings().hide();
    $(this).css('opacity', '1');
  })

  $('img.bg').animate({ opacity: 1}, 5000);
});
