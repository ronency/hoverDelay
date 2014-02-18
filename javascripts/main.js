$(function(){
  $('#demo-menu li').hoverDelay({
      delayIn: 200,
      delayOut:700,
      handlerIn: function($element){
          $element.animate({backgroundColor: '#FF0000'});  
      },
      handlerOut: function($element){
          $element.animate({backgroundColor: '#0000FF'});  
      }
  });  
});
