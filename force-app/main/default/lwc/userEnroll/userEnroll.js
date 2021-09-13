import { LightningElement, api } from 'lwc';

export default class UserEnroll extends LightningElement {


    @api objectApiName = "Employee_Associated_with_Mentors__c";
    

    handleSuccess(){
        alert('Record Created !!');
    }





}