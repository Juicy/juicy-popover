function simulateEvent(name, element) {
  if (window.MouseEvent) {
    const event = new window.MouseEvent(name, {
      view: window,
      bubbles: true,
      cancelable: true
    });
    element.dispatchEvent(event);
  }
}

chai.Assertion.addProperty('visible', function () {
  this.assert(this._obj.offsetWidth || this._obj.offsetHeight || this._obj.getClientRects().length,
      "expected element #{this} to be visible, but it's hidden",
      "expected element #{this} to be hidden, but it's visible");
})

chai.Assertion.addMethod('closeEnoughToValue', function (value, distance = 5) {
  debugger
  this.assert(Math.abs(this._obj - value) < distance),
      `expected element #{this} to be have max distance of ${distance} to ${value} but it has ${Math.abs(this._obj - value)}`,
      `expected element #{this} to be have min distance of ${distance} to ${value} but it has ${Math.abs(this._obj - value)}`;
})