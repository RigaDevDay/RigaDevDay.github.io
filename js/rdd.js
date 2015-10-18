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

});

angular.module('rdd', ['ui.bootstrap'])
  .controller('RddController', ['$scope', '$http', '$modal', '$rootScope', '$location', function($scope, $http, $modal, $rootScope, $location) {
    $http.get('data.json').then(function(response) {
      $scope.staff = response.data.staff;
      $scope.speakers = response.data.speakers;
    });

    $scope.personModal = function(person) {
      var scope = $rootScope.$new();
      scope.person = person;

      var modalInstance = $modal.open({
        templateUrl: 'js/templates/person-modal.html',
        scope: scope
      });
    };
    $scope.go = function ( url ) {
      window.open(url, '_blank');
    };
  }]);