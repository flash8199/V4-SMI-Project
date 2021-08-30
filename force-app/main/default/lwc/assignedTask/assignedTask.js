import { LightningElement, api } from 'lwc';

export default class AssignedTask extends LightningElement {


    @api objectApiName = "Assigned_Step__c";

    handleSuccess(){
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);
    }








}