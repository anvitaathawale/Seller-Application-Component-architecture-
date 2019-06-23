import './aaSellerList.scss'
(function(angular) {
  'use strict';
  
  var aaSellerListController = function(){
    var ctrl = this;
    
    ctrl.deleteSeller=function(seller){
      
      ctrl.onDelete({'seller':seller})
    }
    
    ctrl.editSeller=function(seller){
      
      ctrl.onEdit({'seller':seller});
      console.log('aaSellerList','editSeller()', seller)
    }
    
    ctrl.$onInit = function() {
      
     
    };
  }
  
  angular.module('sellerApp').component('aaSellerList', {
    templateUrl: 'src/components/sellerList/aaSellerList.html',
    controller: aaSellerListController,
    bindings: {
      list: '<',
      onDelete:'&',
      onEdit:'&'
    }
  });


})(window.angular);