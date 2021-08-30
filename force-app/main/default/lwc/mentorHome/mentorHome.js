import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';
export default class MentorHome extends NavigationMixin(LightningElement) {

    @api objectApiName = "Assigned_Task__c";


    @track employeeRecords;
    @track errors;

    @wire(searchEmployee)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.employeeRecords =data;
            this.errors = error;
        }

    handleEvent(event){
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchEmployee({
            searchParam : eventVal

        })

        .then(result => {

            console.log('Employee Record', result);
            this.employeeRecords = result;
            this.errors = undefined;
            
        })

        .catch(error =>{

            console.log('Error',error);
            this.errors = error;
            this.employeeRecords = undefined;
            
        })
    }

     handleEmployeeView(event) {
		
		const employeeId = event.detail;
        console.log(employeeId)
		
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: employeeId,
				objectApiName: 'Employee_Associated_with_Mentors__c',
				actionName: 'view',
			},
		});
	}

    handleSuccess(){
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);
    }







}