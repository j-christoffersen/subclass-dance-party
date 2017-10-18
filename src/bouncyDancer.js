class BouncyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    arguments[2] = 50;
    super(...arguments);
    this.y = 0;
    this.vl = -10;
    this.$node.prepend('<img class="will"/>');
    this.$node.css({'border': 'none'});
  }
  
  step(timeBetweenSteps) {
    super.step(timeBetweenSteps);
    this.y += this.vl;
    if (this.y >= 0) {
      this.vl *= -1;
      this.y *= -1;
    } else {
      this.vl++;
    }

    var styleSettings = {
      top: (this.top + this.y),
    };

    this.$node.css(styleSettings);
  }
}