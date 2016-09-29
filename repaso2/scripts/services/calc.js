angular.module('myApp')
  .factory("calcServ", function(){
    return {
      echo: function(text){
        return text;
      }
    };
  });
