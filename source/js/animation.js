
$('.goal').delay(2500).animate({'opacity':'1'},1000);

$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

 var proposeTitle = function(){
    $('.propose__title').delay(100).animate({opacity:1, bottom:0},'slow');
  };

  var proposeText = function(){
    $('.propose__text').delay(200).animate({opacity:1, bottom:0},'slow');
  };

  var proposeButton = function(){
    $('.propose__button').delay(250).animate({opacity:1, bottom:0},'slow');
  };

  var developersTitle = function(){
    $('.developers__title').delay(500).animate({opacity:1, bottom:0},'slow');
  };

  var animationForm = function(){
    $('.developers__list').delay(1050).addClass('animate');
    $('.developers-form').delay(1500).animate({opacity:1,},'1500');
    $('.developers-form').find('textarea').delay(2500).animate({opacity:1, right:0},'2000');
    $('.developers-form').find('input').delay(3000).animate({opacity:1, right:0},'2000');
    $('.developers-form__button').delay(3500).animate({opacity:1, right:0},'2000');
  };

  if(windowWidth>=320){
    if(windowScrollTop>108){
      proposeTitle();
    }
    if(windowScrollTop>245){
      proposeText();
    }
    if(windowScrollTop>430){
      proposeButton();
    }
    if(windowScrollTop>650){
      developersTitle();
    }

    if(windowScrollTop>1000){
      animationForm();
    }
  }
});


window.onscroll = function () {
  var wScroll = window.pageYOffset;
  console.log(wScroll);
}


  // }else if(windowWidth>549 && windowWidth<=991){
  //   if(windowScrollTop>480){
  //      $('.clients').css('background','tomato');
  //     firstAnimation();
  //   }if(windowScrollTop>1150){
  //      $('.process').css('background','tomato');
  //      secondAnimation();
  //   }if(windowScrollTop>2200){
  //      $('.blogs').css('background','tomato');
  //      thirdAnimation();
  //   }
  // }else{
  //    if(windowScrollTop>450){
  //      $('.clients').css('background','tomato');
  //     firstAnimation();
  //   }if(windowScrollTop>850){
  //      $('.process').css('background','tomato');
  //      secondAnimation();
  //   }
  //   if(windowScrollTop>1600){
  //      $('.blogs').css('background','tomato');
  //      thirdAnimation();
  //   }
  // }
