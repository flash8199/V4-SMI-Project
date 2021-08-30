public with sharing class employeeController {
    public employeeController() {



    }


    @AuraEnabled(cacheable=true)
    public static List<sObject> searchEmployee(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, SMI_Employee__r.Name, SMI_Mentor__r.Name From Employee_Associated_with_Mentors__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, SMI_Employee__r.Name, SMI_Mentor__r.Name From Employee_Associated_with_Mentors__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}