import {mainData} from './main.data'

export class DataLoaderService {
  constructor ($log) {
    'ngInject';

    this.data = mainData;

    // ugly hack to get JSON data back.
    $log.debug(angular.toJson(mainData));
    $log.debug('see here, to generate new JSON');
  }

  getMain () {
    return this.data;
  }

  getSchedule (dayIndex) {
    return this.data.days[dayIndex].schedule;
  }
}
