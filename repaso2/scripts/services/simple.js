// Servicio
angular.module('myApp')
  .factory('simpleServ', function(){
    return {
      alCuadrado: function(n){
        if(typeof n === "string") {
          throw new Error('se esperaba un nro');
          return;
        }
        return n*n;
      }
    };
  });
