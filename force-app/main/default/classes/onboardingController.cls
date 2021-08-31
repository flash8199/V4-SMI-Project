public with sharing class onboardingController {
    public onboardingController() {



    }

    @AuraEnabled(cacheable=true)
    public static List<Employee_Associated_with_Mentors__c> updateSingleRecord()
   {
        return new List<Employee_Associated_with_Mentors__c>([Select Id, SMI_Employee__c, Onboarding_End_Date__c, Onboarding_Status__c from Employee_Associated_with_Mentors__c]);
    }

}
