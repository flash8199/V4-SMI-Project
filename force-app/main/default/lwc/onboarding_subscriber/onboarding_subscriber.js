import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext,APPLICATION_SCOPE,subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLE from "@salesforce/messageChannel/MessageChannel__c";
import ID_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Name';
import NAME_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.SMI_Employee__c';
import MENTOR_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Mentor_Name__c';
import ONBOARDING_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Onboarding_End_Date__c';
import STATUS_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Onboarding_Status__c';


export default class Onboarding_subscriber extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track onboardingId;
    @track objectApi='Employee_Associated_with_Mentors__c';
    fields = [ID_FIELD, NAME_FIELD, MENTOR_FIELD, ONBOARDING_FIELD, STATUS_FIELD];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLE, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
     }
     handleMessage(message) {       
        console.log('message:::'+JSON.stringify(message));
        this.onboardingId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}