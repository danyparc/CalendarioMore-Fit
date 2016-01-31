angular
  .module('mwl.calendar.docs')
  .factory('alert', function($uibModal) {

    function show(action, event) {
      console.log("si entra pero no muestra");
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var vm = this;
          vm.action = action;
          vm.event = event;
        },
        controllerAs: 'vm'
      });
    }

    return {
      show: show
    };

  });
