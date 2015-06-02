
var addressApp = angular.module('addressApp', []);

addressApp.controller('mainController', function($scope) {

	    $scope.contact = {
	      fields : [
	        {
	          label : "First Name",
	          id : "firstName",
	          isRequired : true
	        },
	        {
	          label : "Last Name",
	          id : "lastName",
	          isRequired : true
	        },
	        {
	          label : "Street Address",
	          id : "streetAddress",
	          isRequired : false
	        },
	        {
	          label : "Phone Number",
	          id : "phoneNumber",
	          isRequired : true
	        },
	        {
	          label : "E-mail Address",
	          id : "eMail",
	          isRequired : false
	        },
	      ],//end fields array
	      dataSet: [
	      {
	      	firstName: "John",
	      	lastName: "Smith",
	      	streetAddress: "123 Data Set Street",
	      	phoneNumber: "843-123-1234",
	      	eMail: "test_data_set@gmail.com",
	      	editFlag: false
	      },

	      ]//end dataSet array

	    }


//
    $scope.contactFields = {};

    $scope.addContact = function() {

    	newContact={
    	   firstName: $scope.contactFields.firstName,
    	   lastName: $scope.contactFields.lastName,
    	   streetAddress: $scope.contactFields.streetAddress,
    	   phoneNumber: $scope.contactFields.phoneNumber,
    	   eMail: $scope.contactFields.eMail,
    	   	 }
    $scope.contact.dataSet.push(newContact);
    $scope.contactFields = {}; //reset form	   	 
    	   	 }
    $scope.editContact = function(index){
    	$scope.contact.dataSet[index].editFlag = !$scope.contact.dataSet[index].editFlag;
    }	   	 



});