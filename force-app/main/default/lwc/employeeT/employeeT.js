import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, api } from 'lwc';
import getAssigendTask from '@salesforce/apex/taskController.getAssigendTask';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class EmployeeT extends LightningElement {


    @api employeeRecord;
    

    pictureUrl = 'http://drive.google.com/uc?id=1qw4htF8YZK6PPA2Di0TYXhm1QU1fIEdN';


    handleDetails(){
        
    }

    handleOpenRecordClick() {
        console.log(this.employeeRecord.Name)
        
        const selectEvent = new CustomEvent('employeeview', {
            detail: this.employeeRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }



}