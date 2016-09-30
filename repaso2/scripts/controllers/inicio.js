angular.module('myApp')
.controller("InicioCtrl", function(simpleServ, $rootScope){
  $rootScope.demoVal = simpleServ.alCuadrado(3);
})
