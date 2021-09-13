import { LightningElement, api, track} from 'lwc';
import ID_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Name';

import ONBOARDING_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Onboarding_End_Date__c';
import STATUS_FIELD from '@salesforce/schema/Employee_Associated_with_Mentors__c.Onboarding_Status__c';

export default class OnboardingTile extends LightningElement {

    @api statusRecord;
    @track objectApi='Employee_Associated_with_Mentors__c';
    fields = [ID_FIELD, ONBOARDING_FIELD, STATUS_FIELD];

    pictureUrl = 'http://drive.google.com/uc?id=1x3onh3ajfVBtXbMXD7i4YodV4UDKcq7Y';




    handleDetails(){
        
    }

    handleOpen() {
        console.log(this.statusRecord.Name)
        
        const selectEvent = new CustomEvent('statusview', {
            detail: this.statusRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }



    @track openmodel = false;
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    saveMethod() {
        this.closeModal();
        
    }
}