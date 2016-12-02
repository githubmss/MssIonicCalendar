angular.module('createEvent', [])
.controller('createEventCtrl', function($scope,$ionicPopup, $ionicModal, $timeout, $state,$rootScope) {
Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
$scope.createEvent=function(data){
var finalProductList = [];
if(data==undefined){
		alert($rootScope.nameVal);
	}else if(data.name==undefined){
   alert($rootScope.nameVal);
   }else if(data.name==''){
    alert($rootScope.nameVal);
   }else if(data.discription==undefined){
    		alert($rootScope.discriptionVal);
    	}
	else if(data.discription==''){
		alert($rootScope.discriptionVal);
	}else if(data.Date==undefined){
       		alert($rootScope.discriptionVal);
       	}
else{
var comeFirst=new Date(data.Date)
var res = comeFirst.addDays(1).toISOString().split("T");
 var startTime= res[0]+"T00:10:01+05:30";
     finalProductList
                                                .push({
                                                    title: data.name,
                                                    startTime:startTime,
                                                    endTime:startTime,
                                                    discription:data.discription,
                                                    imageURl:"img/image_large.png",
                                                    allDay:false
                                                });
                                                $scope.listChild=finalProductList;
                              $rootScope.eventsDetailNew=$scope.listChild;
$rootScope.isCreateEvent=true;
  $state.go("app.calender");
     	}
}
})


