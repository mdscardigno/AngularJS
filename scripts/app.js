angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log("Hello There!. This is the hello world controller function, in the mainCtrl");
    alert("Hello There!. This is the hello world controller function, in the mainCtrl");
  };
})
//controller attributes
//controller name, anonymous callback function which takes only 
//one parameter, the $scope variable
//think of scope as the area of operation for your controller
//meaning, controller's functions will only work in the application's parts you allow them to
//in order to use our controller we need to inject it into our template
//+++++++++++++++++++ ADDING ANOTHER CONTROLLER +++++++++++++++++++++
  .controller('coolCtrl', function($scope){
    $scope.whomAmI = function(){
      console.log("Hello there, this is coolCtrl function!");
    };
    $scope.helloWorld = function(){
      console.log("This is not mainCtrl!");
    }
})
.controller('imASibling', function($scope){
  $scope.foobar = 1234;
  //do other cool stuff!
});