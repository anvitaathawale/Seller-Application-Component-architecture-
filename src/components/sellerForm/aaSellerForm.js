import "./aaSellerForm.scss";

(function(angular) {
  'use strict';
  
  var aaSellerFormController = function(){
    var model = this;
    
    
    model.updateMode=false;
    
    model.selectedName='';
    model.selectedCurrencies=[];
    model.selectedOffices=[];
    model.selectedBidded=false;
    model.selectedGuaranteed=false;
    model.selectedContactName='';
    model.selectedEmail='';
    
    model.editSellerData = null;
    
    model.$onChanges = function(changes){
      if(changes.editSellerData && changes.editSellerData.currentValue !== null){
        console.log('aaSellerForm', 'editSellerData changed',
                changes.editSellerData.currentValue);
          
          const sellerData = changes.editSellerData.currentValue;
          model.updateMode = true;
          model.selectedName=sellerData.name;
          model.selectedCurrencies=[...sellerData.currencies];
          model.selectedOffices=[...sellerData.offices];
          model.selectedBidded=sellerData.biddedDeals;
          model.selectedGuaranteed=sellerData.guaranteedDeals;
          model.selectedContactName=sellerData.contactName;
          model.selectedEmail=sellerData.email;
          setTimeout(()=>{
            $('.selectpicker').selectpicker('refresh'); // to clear the selected values text of dropdown
          }, 0);
      }
    }
    
    model.reset = function(){
      model.selectedName='';
      model.selectedCurrencies=[];
      model.selectedOffices=[];
      model.selectedBidded=false;
      model.selectedGuaranteed=false;
      model.selectedContactName='';
      model.selectedEmail='';
      
      setTimeout(()=>{
        $('.selectpicker').selectpicker('refresh'); // to clear the selected values text of dropdown
      }, 0);
      
    }
    
    model._createSeller = function(){
      let payload = {
        name: model.selectedName,
        currencies: model.selectedCurrencies,
        offices: model.selectedOffices,
        biddedDeals: model.selectedBidded,
        guaranteedDeals: model.selectedGuaranteed,
        contactName: model.selectedContactName,
        email: model.selectedEmail
      }
      
      payload = JSON.parse(JSON.stringify(payload));
      
      model.onCreate({'seller': payload});
      console.log("aaSellerForm", "Fired create event", {'seller': payload});
      model.reset();
    }
    
    model._updateSeller = function(){
      const prevSellerData = model.editSellerData;
      const updatedSeller = {
        name: model.selectedName,
        currencies: [...model.selectedCurrencies],
        offices: [...model.selectedOffices],
        biddedDeals: model.selectedBidded,
        guaranteedDeals: model.selectedGuaranteed,
        contactName: model.selectedContactName,
        email: model.selectedEmail
      }
      
      model.onUpdate({
        'seller': prevSellerData,
        'updatedSeller': updatedSeller
      });
      console.log("aaSellerForm", "Fired update event", {
        'seller': prevSellerData,
        'updatedSeller': updatedSeller
      });
      
      model.updateMode = false;
      model.reset();
    }
    
    model.save = function(){
      if(!model.updateMode){
        model._createSeller();
      }else{
        model._updateSeller();
      }
    }
  }
  
  
  angular.module('sellerApp').component('aaSellerForm', {
    templateUrl: 'src/components/sellerForm/aaSellerForm.html',
    controller: aaSellerFormController,
    bindings: {
      'currencyOptions': '<',
      'officeOptions': '<',
      'editSellerData': '<',
      'onCreate': '&',
      'onUpdate': '&'
    }
  });


})(window.angular);