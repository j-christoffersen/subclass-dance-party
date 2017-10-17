
class Dancer {
  constructor(top, left, timeBetweenSteps) {

    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;

    setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);

    

    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
    this.setPosition(top, left);

  }
  
  step(timeBetweenSteps) {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  }
  
  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
  
  static dist(dancer1, dancer2) {
    return Math.sqrt((dancer1.top - dancer2.top) * (dancer1.top - dancer2.top) +
                     (dancer1.left - dancer2.left) * (dancer1.left - dancer2.left));
  }
}