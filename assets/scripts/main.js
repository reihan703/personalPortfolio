$(document).ready(function () {

  // CHANGE THEME
	$('.themeIcon').on('click',function() { 
    $('.themeIcon').toggleClass('flip');
    $('.themeIcon').toggleClass('fa-sun');
    $('.themeIcon').toggleClass('fa-moon');
    
    let theme = $('html').attr('data-theme');

    if(theme == 'dark'){
      $('html').attr('data-theme','light');
    }
    else if(theme == 'light'){
      $('html').attr('data-theme','dark');
    }
  });
  // END THEME
});
