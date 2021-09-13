public with sharing class onboardingController {


    @AuraEnabled(cacheable=true)
    public static List<Employee_Associated_with_Mentors__c> getList()
   {
        return [Select Id, Name, SMI_Employee__r.Name, Onboarding_End_Date__c, Onboarding_Status__c from Employee_Associated_with_Mentors__c LIMIT 20];
    }

}
