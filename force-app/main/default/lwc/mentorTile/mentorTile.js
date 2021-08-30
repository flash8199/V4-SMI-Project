import { LightningElement, api } from 'lwc';

export default class MentorTile extends LightningElement {

    @api mentorRecord;

    pictureUrl = 'http://drive.google.com/uc?id=1iMOoH1ZcG_u-PUjFVQoVjePMexjEvGUf';


    handleOpenRecord() {
        console.log(this.mentorRecord.Name)
        
        const selectEvent = new CustomEvent('mentorview', {
            detail: this.mentorRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }




}