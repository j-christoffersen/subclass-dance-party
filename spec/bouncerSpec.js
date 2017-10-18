describe('bouncer', function() {

  var bouncer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it leave', function() {
    bouncer.step();
    expect(bouncer.y).to.not.equal(0);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncer, 'step');
      expect(bouncer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncer.step.callCount).to.be.equal(2);
    });
  });
});