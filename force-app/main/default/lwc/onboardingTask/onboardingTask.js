import {LightningElement, wire} from 'lwc';
import { NavigationMixin,} from 'lightning/navigation';
import getDepartmentRecord from '@salesforce/apex/departmentController.getDepartmentRecord';
export default class OnboardingTask extends NavigationMixin(LightningElement)  {


@wire(getDepartmentRecord) department;

viewRecord(event) {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: event.target.value,
            objectApiName: 'OnBoarding_Step__c',
            actionName: 'view'
        }
    });
}

viewDepartment(event) {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: event.target.dataset.id,
            objectApiName: 'OnBoarding_Step__c',
            actionName: 'view'
        }
    });
}


}