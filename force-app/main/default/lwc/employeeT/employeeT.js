import { LightningElement, api } from 'lwc';

export default class EmployeeT extends LightningElement {


    @api employeeRecord;

    pictureUrl = 'http://drive.google.com/uc?id=1iMOoH1ZcG_u-PUjFVQoVjePMexjEvGUf';


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