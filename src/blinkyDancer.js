class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(...arguments);
  }
  
  step(timeBetweenSteps) {
    super.step(timeBetweenSteps);
    this.$node.toggle();
  }
}