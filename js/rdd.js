// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $.material.init();

  $("#nav").find("ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

  });

  var dataJqxhr = $.getJSON('data.json');

  // staff members6
  dataJqxhr.done(function(response) {
    var tStaff = $('#tStaff').html();
    response.staff.reduce(function(elem, person) {
      return elem.append(tmpl(tStaff, person));
    }, $('#team-people'));
  });

});