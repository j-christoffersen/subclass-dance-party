class BouncyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    arguments[2] /= 4;
    super(...arguments);
    this.y = 0;
    this.vl = -10;
    this.$node.prepend('<img id="drake" src = "http://i59.tinypic.com/2sb0tj5.png" width = "40%" height = "40%"/>');
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