// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$(".navbar-toggle").click(function(e) {
    e.preventDefault();
    $(".navbar-collapse").toggleClass("collapse");
});

$(".navbar-nav li a").click(function (event) {
  // check if window is small enough so dropdown is created
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").toggleClass("collapse");
  }
});

// Scrolls to the selected menu item on the page
$(function() {
  $("#nav").find("ul li a[href^='#']").on('click', function(e) {
    $(".navbar-collapse").addClass("collapse");

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

angular.module('rdd', ['ui.bootstrap', 'countTo'])
  .controller('RddController', ['$scope', '$http', '$modal', '$rootScope', '$location', function($scope, $http, $modal, $rootScope, $location) {
    $http.get('data.json').then(function(response) {
      $scope.staff    = response.data.staff;
      $scope.speakers = response.data.speakers;
      $scope.days     = response.data.days;

      $scope.currentDay = '';

      if($scope.days.length > 0) {
        $scope.currentDay = $scope.days[0];
        $scope.loadSchedule();
      }
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
    $scope.loadSchedule = function() {
      $http.get($scope.currentDay.file).then(function(response) {
        $scope.schedule = response.data.schedule;
        $scope.rooms    = response.data.roomNames;
        $scope.tracks   = response.data.trackNames;
      });
    };

    $scope.loadDay = function(a) {
      $scope.currentDay = $scope.days[a];
      $scope.loadSchedule();
    };
  }]);