
describe("Test Suite", function () {
  var calcServ;

  beforeEach(module("myApp"));

  beforeEach(inject(function (_calcServ_) {
    calcServ = _calcServ_;
  }));

  it("Test service", function () {
			console.log(calcServ);
			expect(calcServ).toBeDefined();
  });

});
