class ClickDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(...arguments);
    this.$node.prepend('<img id="carlton" src = "https://i.giphy.com/media/qQPISdaKEdxK0/giphy.webp" width = "40%" height = "40%"/>');
    this.$node.css({'border': 'none'});
  }
  
  step(timeBetweenSteps) {
    super.step(timeBetweenSteps);

  }
}