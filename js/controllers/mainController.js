myApp.controller('mainController',['$scope', '$http', 'apiCall', function($scope, $http, apiCall){

	//  We'll load our list of subreddits from our API into this variable

    $scope.listOfSubReddits = null;  
    
    // Default value
    var searchSkill = 'ReactJS';
    
    $scope.value = searchSkill;
    fetchInitialData();
    
    /**
     * Let's bring all our subreddits.
     * @returns {*}
     */
    
    // As the initial data loaded by default
    
    function fetchInitialData(){    	
        apiCall.getListOfSubReddits(searchSkill)
          .then(function(response) {
        	  $scope.listOfSubReddits = response.data.children;
            }, function(error) {
                // promise rejected
                console.log("Couldn't load the list of subreddits, error # " + error);
        });
    };
    
    // As the data loaded from the Form
    
    $scope.fetchSubRedditsGiven = function(){
    	searchSkill = $scope.value;    	
        apiCall.getListOfSubReddits(searchSkill)
          .then(function(response) {
        	  $scope.listOfSubReddits = response.data.children;
            }, function(error) {
                // promise rejected
                console.log("Couldn't load the list of subreddits, error # " + error);
        });
    };
}]);