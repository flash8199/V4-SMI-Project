public with sharing class departmentController {
    public departmentController() {

    }


    @AuraEnabled(cacheable=true)
    public static List<OnBoarding_Step__c> getDepartmentRecord()
   {
        return new List<OnBoarding_Step__c>([Select Name from OnBoarding_Step__c]);
    }
}
