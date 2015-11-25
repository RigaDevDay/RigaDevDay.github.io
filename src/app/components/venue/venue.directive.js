/* global google:false */
export function VenueDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/venue/venue.html',
    scope: {},
    controller: VenueController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class VenueController {
  constructor () {
    'ngInject';

    this.map = {
      center: {latitude: 56.946333, longitude: 24.116870},
      zoom: 15,
      options: {
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            "stylers": [{"hue": "#00aaff"}, {"saturation": -23}, {"gamma": 1.37}, {"lightness": -5}]
          }
        ]
      }
    };

    this.markers = {
      cinema: {
        idKey: 'place',
        position: {latitude: 56.946333, longitude: 24.116870},
        options: {
          title: 'Riga Dev Day 2016',
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          labelContent: 'Kino Citadele',
          labelAnchor: "46 -5",
          labelClass: 'map-label'
        }
      },
      avalon: {
        idKey: 'avalon',
        position: {latitude: 56.945492, longitude: 24.112021},
        options: {
          title: 'Avalon Hotel Riga',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          labelContent: 'Avalon Hotel Riga',
          labelAnchor: "60 -5",
          labelClass: 'map-label'
        }
      },
      mercure: {
        idKey: 'mercure',
        position: {latitude: 56.947525, longitude: 24.123884},
        options: {
          title: 'Mercure Riga Centre hotel',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          labelContent: 'Mercure Riga Centre hotel',
          labelAnchor: "86 -5",
          labelClass: 'map-label'
        }
      }
    }
  }
}
