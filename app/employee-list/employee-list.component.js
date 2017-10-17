'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('employeeList').
  component('employeeList', {
    templateUrl: 'employee-list/employee-list.template.html',
    controller: ['$http', function EmployeeListController($http) {
      var self = this;
      self.orderProp = 'emp_no';

      $http.get('http://localhost:8080/employees/range/10001to10020').then(function(response) {
        self.employees = response.data;
        console.log(self.employees);
      });

      var API_KEY = '6728169-c144c00092689f1b51c8f3c98';
      var url = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('man');
      self.thumbnail = [];
      $http.get(url).then(function (response) {
          var dataReceived = response.data;
          if (parseInt(dataReceived.totalHits) > 0) {

            console.log(dataReceived.totalHits+1);
            console.log(dataReceived.hits);

            var values = dataReceived.hits;
            angular.forEach(values, function (value, key) {
                self.thumbnail.push(value.previewURL);
                // console.log(value.previewURL);
            })
          }
      })
    }]
  });
