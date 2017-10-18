class ClickDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(...arguments);
    this.$node.prepend('<img class="carlton"/>');
    this.$node.css({'border': 'none'});
    this.$node[0].addEventListener('click', (function() {
      
      do {
        var yOffScreen = Math.random() * ($('body').height() + 1000) - 500;
        var xOffScreen = Math.random() * ($('body').width()  + 1000) - 500;
      } while (xOffScreen > -100 && xOffScreen < $('body').width()  + 100 &&
               yOffScreen > -100 && yOffScreen < $('body').height() + 100);
      
      this.flyTo(xOffScreen, yOffScreen);
    }).bind(this));
  }
  
  flyTo(xOffScreen, yOffScreen) {
    this.$node.addClass('rotating');
    
    var styleSettings = {
      top: yOffScreen,
      left: xOffScreen,
    };
    this.$node.animate(styleSettings, 1500);
    
    setTimeout(function() {
      this.$node.remove();
      window.dancers.forEach((dancer, i, dancers) => {
        if (dancer === this) {
          dancers.splice(i, 1);
        }
      });
    }.bind(this), 2000);
  }
  
  step(timeBetweenSteps) {
    super.step(timeBetweenSteps);

  }
}