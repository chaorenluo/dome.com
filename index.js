(function(){
	var app=angular.module("dome");
	app.controller("index",["$scope","$log",index]);
	function index($scope,$log)
	{
		 $("#d3").height((100 - ($("#d2").height() / $(document.body).height() * 100)) + "%");
         $("#d3").height((100 - ($("#d2").height()+$("#a1").height() / $(document.body).height() * 100)) + "%");
        $("#d4").height((100 - ($("#d2").height()+$("#a1").height() / $(document.body).height() * 100)) + "%");
           $("#a2").attr("style","margin-top:"+$("#a1").height()+"px");
           //alert((100 - ($("#d2").height()+$("#a1").height() / $(document.body).height() * 100)) + "%");
          window.onresize=function()
          {
            $("#a2").attr("style","margin-top:"+$("#a1").height()+"px");
          	$("#d3").height((100 - ($("#d2").height()+$("#a1").height() / $(document.body).height() * 100)) + "%");
           	$("#d4").height((100 - ($("#d2").height()+$("#a1").height() / $(document.body).height() * 100)) + "%");
          }
          $scope.data=[
          	{"name":"热销"},
          	{"name":"风味小吃"},
          	{"name":"营养小吃"},
          	{"name":"商务套餐"},
          	{"name":"营养套餐饭"},
          	{"name":"营养汤套餐饭"},
          	{"name":"各种卤味"},
          	{"name":"药膳炖总"},
          	{"name":"单卤肉一份"},
          	{"name":"饮料"},
          	{"name":"米饭"}
          ];
	}
})();