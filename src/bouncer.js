class Bouncer extends Dancer {
  
  constructor(top, left, timeBetweenSteps) {
    super(...arguments);
    // this.$node.prepend('<img src = "https://files.slack.com/files-pri/T7CPGS090-F7K9FBC0H/uncle_phil.png" width = "20%" height = "20%"/>');
    this.$node.prepend('<img src = "https://files.slack.com/files-pri/T7CPGS090-F7K9FBC0H/uncle_phil.png" width = "160px" height = "120px"/>');
    this.$node.css({'border': 'none'});
    // var styleSettings = {
    //   'border-color': 'white',
    // };
    // this.$node.css(styleSettings);
    this.stepCounter = 0;
    this.closest;
  }
  
  step(timeBetweenSteps) {
    super.step(timeBetweenSteps);
    if (this.stepCounter === 10) {
      // var this.closest;
      var shortestDist = Number.MAX_VALUE;
      window.dancers.forEach(dancer => {
        var dist = Dancer.dist(dancer, this);
        if (dist < shortestDist && dancer !== this && dancer.constructor.name !== 'Bouncer') {
          this.closest = dancer;
          shortestDist = dist;
        }
      });
      
      if (this.closest) {
        this.xstep = -(this.left - (this.closest.left - 5)) / 10;
        this.ystep = -(this.top -  (this.closest.top + 5))  / 10;
      } else {
        this.stepCounter = 0;
      }
    }    
    
    if (this.stepCounter >= 10 && this.stepCounter < 20) {
      this.setPosition(this.top + this.ystep, this.left + this.xstep);
      
      this.setPosition(this.top, this.left);
    } else if (this.stepCounter >= 20) {
      var stepSize = 25;
      this.left += stepSize;
      this.setPosition(this.top, this.left);
      this.closest.left += stepSize;
      this.closest.setPosition(this.closest.top, this.closest.left);
      if (this.left > $('body').width()) {
        this.closest.$node.remove();
        this.$node.remove();
        window.dancers.forEach((dancer, i, dancers) => {
          if (dancer === this || dancer === this.closest) {
            dancers.splice(i, 1);
          }
        });
      }
      // if (this.left > $('body').width() + 10) {
      //   this.closest. //remove from DOM and dancers array
      // }
    }
    
    this.stepCounter++;
  }
}