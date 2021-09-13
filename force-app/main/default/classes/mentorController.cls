public with sharing class mentorController {


    @AuraEnabled(cacheable=true)
    public static List<sObject> searchMentor(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, Mentor_Name__r.Name, Profile_Picture__c From SMI_Mentor__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, Mentor_Name__r.Name, Profile_Picture__c From SMI_Mentor__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
}

}