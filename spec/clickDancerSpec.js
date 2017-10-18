describe('clickDancer', function() {

  var clickDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    clickDancer = new ClickDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(clickDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a flyTo function that makes it dissapear', function() {
    sinon.spy(clickDancer.$node, 'addClass');
    clickDancer.flyTo(10, 10);
    expect(clickDancer.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(clickDancer, 'step');
      expect(clickDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(clickDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(clickDancer.step.callCount).to.be.equal(2);
    });
  });
});