import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ManagerController.getContacts';

export default class ManagerHomePage extends LightningElement {
    @wire(getContacts) getContactList;
    getContactsToLWC(){
        getContacts().then(contactList => {
            console.log("Contacts retrieved successfully : " + contactList.length);
        })
        .catch(error => {
            console.log(error);
        });
    }


    /* clickMentorButton(event) {
        console.log("Mentor button clicked");
    }

    clickManagerButton(event) {
        console.log("Manager button clicked");
    } */

}