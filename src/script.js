(function(angular) {
  'use strict';

angular.module('sellerApp',[]).controller('MainCtrl', function MainCtrl() {
  var model=this;
  model.allCurrencies = ['USD', 'GBR', 'EUR'];
  model.allOffices = ['JP','UK','US','FR','AU','IT'];

  
  model.sellerListData = [
    {
      name: "Seller1",
      currencies: ['USD', 'GBR', 'EUR'],
      offices: ['JP','UK','US','FR','AU','IT'],
      biddedDeals:true,
      guaranteedDeals:true,
      contactName:'',
      email:''
    },
    {
      name: "Seller2",
      currencies: ['USD'],
      offices: ['JP','IT'],
      biddedDeals:true,
      guaranteedDeals:true,
      contactName:'',
      email:''
    }
    
    ]
    
   
    model.sellerToBeEdited = null;
    
    model.createSeller = function(seller) {
      seller = JSON.parse(JSON.stringify(seller));
      model.sellerListData.push(seller);
      console.log("controller", model.sellerListData)
      
    }
    
    model.deleteSeller = function(seller) {
      console.log('controller','deleteSeller()', seller.name)
      var index = model.sellerListData.indexOf(seller);
      if (index >= 0) {
        model.sellerListData.splice(index, 1);
      }
    };
    
    model.updateSeller = function(seller, updatedSeller){
      var index = model.sellerListData.indexOf(seller);
      if (index >= 0) {
        const result = Object.assign(seller, updatedSeller);
        console.log('controller', 'updateSeller()', result);
        model.sellerToBeEdited = null;
      }
    }
    
    model.editSeller = function(seller){
       model.sellerToBeEdited = seller;
       console.log('MainCtrl', 'editSeller()',seller)
    }
    
  

});
})(window.angular);
