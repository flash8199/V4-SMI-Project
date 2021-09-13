import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire } from 'lwc';
import getAssigendTask from '@salesforce/apex/taskController.getAssigendTask';

import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class TaskList extends NavigationMixin(LightningElement)  {

    @track taskRecords;
    @track errors;
    context = createMessageContext();
    @track taskList;
    connectedCallback(){
        getAssigendTask()
            .then(result =>{
                this.taskList = result;
            })
            .catch(error=>{
                this.taskList = error;
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
                this.taskRecords = data;
                this.errors = undefined;
            }
            if(error){
                this.errors = error;
                this.taskRecords = undefined;
            }
        }




        handleEvent(event){
            const eventVal = event.detail;
            console.log('Search Param',eventVal);
            getAssigendTask({
                searchParam : eventVal
    
            })
    
            .then(result => {
    
                console.log('Task Record', result);
                this.taskRecords = result;
                this.errors = undefined;
                
            })
    
            .catch(error =>{
    
                console.log('Error',error);
                this.errors = error;
                this.taskRecords = undefined;
                
            })
        }



        handleTaskView(event) {
		
            const taskId = event.detail;
            console.log(taskId)
            
            this[NavigationMixin.Navigate]({
                
                type: 'standard__recordPage',
                attributes: {
                    recordId: taskId,
                    objectApiName: 'Assigned_Task__c',
                    actionName: 'view',
                },
            });
        }


    



}