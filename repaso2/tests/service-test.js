
describe("Test Suite", function () {
  var simpleServ;

  beforeEach(module("myApp"));

  beforeEach(inject(function (_simpleServ_) {
    simpleServ = _simpleServ_;
  }));

  it("Test service number", function () {
			console.log(simpleServ);
			expect(simpleServ).toBeDefined();
      expect(simpleServ.alCuadrado(2)).toBe(4);
      expect(simpleServ.alCuadrado(2)).not.toBe(5);
      expect(simpleServ.alCuadrado(2)).not.toBe(3);
  });

  it("Test service string", function () {
			expect(simpleServ).toBeDefined();
      //console.log(simpleServ.alCuadrado("hola"));
      expect(function(){simpleServ.alCuadrado("hola")}).toThrow();
  });





});
