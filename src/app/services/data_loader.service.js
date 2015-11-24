import {mainData} from './main.data'

export class DataLoaderService {
  constructor () {
    'ngInject';

    this.data = mainData;
  }

  getMain () {
    return this.data;
  }

  getSchedule (dayIndex) {
    return this.data.days[dayIndex].schedule;
  }
}
