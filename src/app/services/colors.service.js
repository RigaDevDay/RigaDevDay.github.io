export class ColorsService {
  constructor () {
    'ngInject';
    this.availableColors = [
      'orchid',
      'navy',
      'orange',
      'magenta',
      'brown',
      'aqua',
      'chocolate',
      'plum',
      'salmon',
      'sea-green',
      'state-blue',
      'yellow-green',
      'dark-slate-gray'
    ];

    this.currentTagColor = 0;
    this.registeredTagColors = {};
  }

  colorForTag (tag) {
    if (this.registeredTagColors[tag]) {
      return this.registeredTagColors[tag];
    }

    if (this.currentTagColor < this.availableColors.length) {
      this.registeredTagColors[tag] = this.availableColors[this.currentTagColor];
      this.currentTagColor++;
    } else {
      return "default";
    }
  }
}
