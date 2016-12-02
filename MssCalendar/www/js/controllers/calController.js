angular.module('app.calender', [])
.controller('CaladarCtrl', function($scope,$ionicPopup, $ionicModal, $timeout, $state,$rootScope) {
   'use strict';
        $scope.calendar = {};
        $scope.changeMode = function (mode) {
            $scope.calendar.mode = mode;
        };
        $scope.loadEvents = function () {
        if($rootScope.isCreateEvent==true){
        $rootScope.isCreateEvent=false;
        $scope.calendar.eventSource=$rootScope.eventsDetailNew;
        $rootScope.eventsDetailNew="";
       }else{
$scope.calendar.eventSource = createRandomEvents();
            console.log('Event selected:' + JSON.stringify($scope.calendar.eventSource));
        }
        };
        $scope.loadEvents();
        $scope.onEventSelected = function (event) {
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        };
        $scope.onViewTitleChanged = function (title) {
            $scope.viewTitle = title;
        };
$scope.onViewTitleChanged();
        $scope.today = function () {
            $scope.calendar.currentDate = new Date();
                        $scope.calendar.eventSource = clearEvents();
        };
            $scope.clearEvents = function () {
                    $scope.calendar.currentDate = new Date();
                                $scope.calendar.eventSource = clearEvents();
                };
        $scope.isToday = function () {
            var today = new Date(),
                currentCalendarDate = new Date($scope.calendar.currentDate);

            today.setHours(0, 0, 0, 0);
            currentCalendarDate.setHours(0, 0, 0, 0);
            return today.getTime() === currentCalendarDate.getTime();
        };
         $scope.createEvent=function () {
         $state.go("createEvent");
         }
        $scope.onTimeSelected = function (selectedTime, events) {
        $rootScope.treatmentDetail=events;
        if($rootScope.treatmentDetail!=undefined){
        $state.go("calDetail");
        }

            console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0));
        };
        function createRandomEvents() {
            var events = [];
            for (var i = 0; i < 5; i += 1) {
                var date = new Date();
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                    var startMinute = Math.floor(Math.random() * 24 * 60);
                                    var endMinute = Math.floor(Math.random() * 180) + startMinute;
                                    startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                                    endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                                    events.push({
                                        title: 'Event - ' + i,
                                        startTime: startTime,
                                        endTime: endTime,
                                        discription:"How r u?????????????",
                                        imageURl:"img/image_large.png",
                                        allDay: false
                                    });
            }
            return events;
        }
     function clearEvents() {
            var events = [];

            return events;
        }
})

