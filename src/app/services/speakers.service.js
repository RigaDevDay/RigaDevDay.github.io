export class SpeakersService {
  constructor () {
    'ngInject';
  }

  findSpeakerById(speakers, speakerId) {
    return speakers.filter((speaker) => {
      return speaker.id == speakerId;
    })[0];
  }
}
