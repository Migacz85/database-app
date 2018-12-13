//Page need to stay at the same position after refresh
//When user is editing recepie 

$(window).scroll(function() {
    sessionStorage.scrollTop = $(this).scrollTop();
   
  });
  
  $(document).ready(function() {
    if (sessionStorage.scrollTop != "undefined") {
      $(window).scrollTop(sessionStorage.scrollTop);
    }
  });
  
  function myFunction(){
      $("button").submit();
  }
