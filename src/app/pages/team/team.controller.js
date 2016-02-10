export class TeamController {
  constructor (dataLoaderService) {
    'ngInject';

    this.team = dataLoaderService.getMain().team;
  }
}
