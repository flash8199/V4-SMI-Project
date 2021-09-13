import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire } from 'lwc';
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';
import getAssigendTask from '@salesforce/apex/taskController.getAssigendTask';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
export default class EmployeeList extends NavigationMixin(LightningElement) {
    @track employeeRecords;
    @track errors;
    context = createMessageContext();

    @track employeeList;
    connectedCallback(){
        getAssigendTask()
            .then(result =>{
                this.employeeList = result;
            })
            .catch(error=>{
                this.employeeList = error;
            });
    }
    handleClick(event) {
        event.preventDefault();                
        const message = {
            recordId: event.target.dataset.value,
            recordData: { value: "message from Lightning Web Component" }
        };
        publish(this.context, SAMPLEMC, message);

    }
    @wire(getAssigendTask)
    wiredTask({
        data, error
    }) {
        if(data){
            this.employeeRecords = data;
            this.errors = undefined;
        }
        if(error){
            this.errors = error;
            this.employeeRecords = undefined;
        }
    }
    

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




}