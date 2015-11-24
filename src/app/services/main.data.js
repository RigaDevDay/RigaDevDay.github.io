import {staffData} from './staff.data'
import {speakersData} from './speakers.data'
import {scheduleDay1Data} from './schedule1.data'
import {scheduleDay2Data} from './schedule2.data'
import {scheduleDay3Data} from './schedule3.data'

export const mainData = {
  "staff": staffData,
  "speakers": speakersData,
  "days": [
    {
      "title": "Day 1",
      "schedule": scheduleDay1Data
    },
    {
      "title": "Day 2",
      "schedule": scheduleDay2Data
    },
    {
      "title": "Workshops",
      "schedule": scheduleDay3Data
    }
  ]
};
