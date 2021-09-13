import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext,APPLICATION_SCOPE,subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import NAME_FIELD from '@salesforce/schema/Assigned_Task__c.Name';
import ASSIGNED_FIELD from '@salesforce/schema/Assigned_Task__c.Assigned_To__c';
import FUNCTIONAL_FIELD from '@salesforce/schema/Assigned_Task__c.Functional_Role__c';
import MENTOR_FIELD from '@salesforce/schema/Assigned_Task__c.Mentor_Name__c';
import ONBOARDING_FIELD from '@salesforce/schema/Assigned_Task__c.Onboarding_Step__c';
import DEADLINE_FIELD from '@salesforce/schema/Assigned_Task__c.Deadline_Date_and_Time__c';
import DUETODAY_FIELD from '@salesforce/schema/Assigned_Task__c.Due_Today__c';
import OVERDUE_FIELD from '@salesforce/schema/Assigned_Task__c.Overdue__c';
import STATUS_FIELD from '@salesforce/schema/Assigned_Task__c.Task_Status__c';
import TASKUPDATE_FIELD from '@salesforce/schema/Assigned_Task__c.Task_Verification__c';

export default class Subscriber_lwc extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track taskId;
    @track objectApiName='Assigned_Task__c';
    fields = [NAME_FIELD, ASSIGNED_FIELD, FUNCTIONAL_FIELD, MENTOR_FIELD, ONBOARDING_FIELD, DEADLINE_FIELD, DUETODAY_FIELD, OVERDUE_FIELD, STATUS_FIELD, TASKUPDATE_FIELD];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
     }
     handleMessage(message) {       
        console.log('message:::'+JSON.stringify(message));
        this.taskId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}