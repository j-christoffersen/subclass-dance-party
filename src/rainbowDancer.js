class RainbowDancer extends Dancer {
  
  constructor(top, left, timeBetweenSteps) {
    super(...arguments);
    this.colorIndex = 0;
    console.log(this.colorIndex);
  }
  
  step(timeBetweenSteps) {
    super.step(timeBetweenSteps);
    
    // console.dir(this);
    // console.log(this.colorIndex);
    
    
    
    this.colorIndex = (this.colorIndex + 1) % this.constructor.colorList.length;
    
    var nextColor = this.constructor.colorList[this.colorIndex];
    
    var styleSettings = {
      'border-color': nextColor,
    };
    this.$node.css(styleSettings);
  }
}

RainbowDancer.colorList = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];