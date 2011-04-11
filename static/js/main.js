$("#main-note").ready(function(){
  $("#bother_me").click(function(){
    if($("#bother_me").attr('checked')){
      if(!window.webkitNotifications) {
        alert('Sorry , you\'re gonna need a webkit browser, like google chrome.');
      }else{
        if(window.webkitNotifications.checkPermission() == 1){
          window.webkitNotifications.requestPermission();
        }
      }
    }
  })
});