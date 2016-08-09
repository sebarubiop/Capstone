'use strict';

(function() {

class MainController {

  constructor($http, $scope, $state, socket) {
    this.$http = $http;
    this.$state = $state;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addBForm() {
    if (this.encnum || this.starttime || this.finishtime || this.encdate || this.medicare || this.nonmedicare) {
      this.$http.post('/api/things', {
        encnum: this.encnum,
        starttime: this.starttime,
        finishtime: this.finishtime,
        encdate: this.encdate,
        medicare: this.medicare,
        nonmedicare: this.nonmedicare
      });
      this.encnum = '';
      this.starttime = '';
      this.finishtime = '';
      this.encdate = '';
      this.medicare = '';
      this.nonmedicare = '';
    }
  }

  deleteBForm(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

  goToBForm(thing){
    this.$state.go('bform',{id:thing._id});
    console.log("GO!");
  }
}

angular.module('exampleApp')
  .controller('MainController', MainController);

})();
