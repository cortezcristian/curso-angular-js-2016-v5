var alCuadrado = function(n){
  if(typeof n !== 'number'){
    throw new Error('Se esperaba un nro');
  }
  return n*n;
}

var assert = require('assert');

describe('Personas', function(){
  describe('Proveedores', function(){


    it('si paso 2 esperar 4', function(){
      assert.ok(alCuadrado(2) === 4, 'Se esperaba 4');
      assert.ok(alCuadrado(2) !== 5, 'Se esperaba 4');
      assert.ok(alCuadrado(2) !== 6, 'Se esperaba 4');
    });

    /*
    it('should fail', function(){
      throw new Error('Lalala');
    });
    */

  });
});
