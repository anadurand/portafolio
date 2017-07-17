var lastScrollTop = 0;
//cambiar el estilo del header cuando avanza el scroll
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > 600){
     $('.nav').addClass("nav__change");
     $('.logo').addClass("logo__change");

   }
   if(currentScroll<=600){
     $('.nav').removeClass("nav__change");
     $('.logo').removeClass("logo__change");

   }
   lastScrollTop = currentScroll;
}, false);

function typing(element, typingSpeed){
  var item = $(element);
  item.css({
    "position": "relative",
    "display": "inline-block"
  });
  item.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  item = item.find(".line-js");
  var text = item.text().trim().split('');
  var stringLenght = text.length;
  var newString = "";
  item.text("|");
  setTimeout(function(){
    item.css("opacity",1);
    item.prev().removeAttr("style");
    item.text("");
    for(var i = 0; i < stringLenght; i++){
      (function(i,char){
        setTimeout(function() {
          newString += char;
          item.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){

      typing(".typing-js",200);

      $(".button-collapse").sideNav({
        menuWidth: 315,
        edge: 'right'
      });
      $('.close').on('click',(e)=>{
        $('#slide-out').sideNav('hide');
      });
      $('.link-scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
        $('#slide-out').sideNav('hide');

      });

});
