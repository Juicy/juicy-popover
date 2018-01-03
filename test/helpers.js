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
