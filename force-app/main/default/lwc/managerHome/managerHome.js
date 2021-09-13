import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchMentor from '@salesforce/apex/mentorController.searchMentor';


export default class ManagerHome extends NavigationMixin(LightningElement) {

    @track mentorRecords;
    @track errors;
    @api objectApiName = "Employee_Associated_with_Mentors__c";
    @api objectApiRef = "OnBoarding_Step__c";
    @api errorMessage;
    @api objectApi = "Assigned_Task__c";
    
    

    @wire(searchMentor)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.mentorRecords =data;
            this.errors = error;
        }

    handleEvent(event)
    {
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchMentor({
        searchParam : eventVal
    
        })
    
        .then(result => {
    
            console.log('Mentor Record', result);
            this.mentorRecords = result;
            this.errors = undefined;
                
        })
    
        .catch(error =>{
    
            console.log('Error',error);
            this.errors = error;
            this.mentorRecords = undefined;
                
            })
    }


    handleMentorView(event) {

        const mentorId = event.detail;
        console.log(mentorId)
		
		
		
		this[NavigationMixin.Navigate]({
            
			type: 'standard__objectPage',
			attributes: {
				
                
				objectApiName: 'Employee_Associated_with_Mentors__c',
                
				actionName: 'list'
			}
		});
	}


    handleSuccess(){

       

    }

    handleResetFunction(event){
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        console.log("form resetted");

        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast)
        console.log("Data submitted");
    }















}