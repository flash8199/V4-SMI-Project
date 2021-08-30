import { LightningElement, api } from 'lwc';

export default class UserEnroll extends LightningElement {


    @api objectApiName = "User_Functional_Role__c";

    handleSuccess(){
        alert('Record Created !!');
    }





}