import { LightningElement, api } from 'lwc';

export default class MentorTile extends LightningElement {

    @api mentorRecord;

    pictureUrl = 'http://drive.google.com/uc?id=1ut-Lz2nmhvHFE2E32WSkLg_mp5FF8uDm';


    handleOpenRecord() {
        console.log(this.mentorRecord.Name)
        
        const selectEvent = new CustomEvent('mentorview', {
            detail: this.mentorRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }




}