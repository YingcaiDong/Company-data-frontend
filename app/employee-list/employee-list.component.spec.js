'use strict';

describe('employeeList', function() {

  // Load the module that contains the `employeeList` component before each test
  beforeEach(module('employeeList'));

  // Test the controller
  describe('EmployeeListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8080/employees/range/10001to10020')
                  .respond([{first_name: 'Tzvetan'}, {last_name: 'Bouloucos'}]);

      ctrl = $componentController('employeeList');
    }));

    it('should create a `employees` property with 2 employees fetched with `$http`', function() {
      expect(ctrl.employees).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.employees).toEqual([{first_name: 'Tzvetan'}, {last_name: 'Bouloucos'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('emp_no');
    });

  });

});
