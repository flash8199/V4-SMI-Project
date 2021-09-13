public with sharing class employeeController {

    @AuraEnabled(cacheable=true)
    public static List<sObject> searchEmployee(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, SMI_Employee__r.Name, Mentor_Name__r.Name, Role__r.Name, Onboarding_End_Date__c, Onboarding_Status__c, Profile__c From Employee_Associated_with_Mentors__c Where SMI_Employee__r.Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, SMI_Employee__r.Name, Mentor_Name__r.Name, Role__r.Name, Onboarding_End_Date__c, Onboarding_Status__c, Profile__c From Employee_Associated_with_Mentors__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}