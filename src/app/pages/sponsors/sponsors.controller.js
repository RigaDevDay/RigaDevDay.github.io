export class SponsorsController {
  constructor (dataLoaderService, $scope, $routeParams) {
    'ngInject';

    let data = dataLoaderService.getMain();
    this.sponsors = data.sponsors;
    $scope.sponsor  = this.findSponsorById($routeParams.id);
  }

  findSponsorById(sponsorId) {
    return this.sponsors.filter((sponsor) => {
      return sponsor.id == sponsorId;
    })[0];
  }
}
