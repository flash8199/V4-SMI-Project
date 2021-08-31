import { LightningElement, api} from 'lwc';

export default class OnBoardingstep extends LightningElement {


    @api objectApiName = "OnBoarding_Step__c";

    handleSuccess(){
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);
}

}