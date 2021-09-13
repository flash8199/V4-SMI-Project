import { LightningElement, track } from 'lwc';

export default class TaskSearch extends LightningElement {
    @track searchTask;

    handleTask(event){
        const value = event.target.value;
        const searchEvent = new CustomEvent(
            'tasksearch',

            {
                detail: value
            }
        );

        this.dispatchEvent(searchEvent);
    }
}