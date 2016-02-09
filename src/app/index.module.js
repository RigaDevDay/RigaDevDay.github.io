/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Components
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { HeaderDirective } from '../app/components/header/header.directive';
import { BackNavbarDirective } from '../app/components/back-navbar/back-navbar.directive';
import { AboutDirective } from '../app/components/about/about.directive';
import { SpeakersDirective } from '../app/components/speakers/speakers.directive';
import { ScheduleDirective } from '../app/components/schedule/schedule.directive';
import { VenueDirective } from '../app/components/venue/venue.directive';
import { TicketsDirective } from '../app/components/tickets/tickets.directive';
import { Rdd2015Directive } from '../app/components/rdd2015/rdd2015.directive';
import { SponsorsDirective } from '../app/components/sponsors/sponsors.directive';
import { TeamDirective } from '../app/components/team/team.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';

// Services
import { DataLoaderService } from '../app/services/data_loader.service';
import { SpeakersService } from '../app/services/speakers.service';

// Directives

import { CountToDirective } from '../app/directives/countTo.directive';

// Controller
import { IndexController } from './pages/index/index.controller';
import { PressController } from './pages/press/press.controller';
import { MemoriesController } from './pages/memories/memories.controller';

angular.module('rdd', [
  'ngAnimate',
  'ngSanitize',
  'ngTouch',
  'ngRoute',
  'mgcrea.ngStrap',
  'uiGmapgoogle-maps',
  'duScroll'
]);

angular.module('rdd')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
;

angular.module('rdd')
  .constant('moment', moment)
;

angular.module('rdd')
  .service('dataLoaderService', DataLoaderService)
  .service('speakersService', SpeakersService)
  .directive('rddNavbar', NavbarDirective)
  .directive('rddBackNavbar', BackNavbarDirective)
  .directive('rddHeader', HeaderDirective)
  .directive('rddAbout', AboutDirective)
  .directive('rddSpeakers', SpeakersDirective)
  .directive('rddSchedule', ScheduleDirective)
  .directive('rddVenue', VenueDirective)
  .directive('rddTickets', TicketsDirective)
  .directive('rdd2015', Rdd2015Directive)
  .directive('rddSponsors', SponsorsDirective)
  .directive('rddTeam', TeamDirective)
  .directive('countTo', CountToDirective)
  .directive('rddFooter', FooterDirective)
  .controller('IndexController', IndexController)
  .controller('PressController', PressController)
  .controller('MemoriesController', MemoriesController)
;
