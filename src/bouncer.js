class Bouncer extends Dancer {
  
  constructor(top, left, timeBetweenSteps) {
    super(...arguments);
    this.$node.prepend('<img id="kanye" src = "http://i30.tinypic.com/2ujte0m.jpg" width = "40%" height = "40%"/>');
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
        if (dist < shortestDist && dancer !== this) {
          this.closest = dancer;
          shortestDist = dist;
        }
      });
      
      if (this.closest) {
        this.xstep = -(this.left - (this.closest.left - 5)) / 10;
        this.ystep = -(this.top -  (this.closest.top + 5))  / 10;
      }
    }    
    
    if (this.stepCounter >= 10 && this.stepCounter < 20) {
      this.left += this.xstep;
      this.top    += this.ystep;
      
      this.setPosition(this.top, this.left);
    } else if (this.stepCounter >= 20) {
      this.left += 10;
      this.setPosition(this.top, this.left);
      this.closest.left += 10;
      this.closest.setPosition(this.closest.top, this.closest.left);
      // if (this.left > $('body').width() + 10) {
      //   this.closest. //remove from DOM and dancers array
      // }
    }
    
    this.stepCounter++;
  }
}