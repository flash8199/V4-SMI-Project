public with sharing class taskController {




    @AuraEnabled(cacheable=true)
    public static List<Assigned_Task__c> getAssigendTask()
   {
        return new List<Assigned_Task__c>([Select Name, Assigned_To__r.Name, Functional_Role__c, Task_Status__c, Onboarding_Step__c, Task_Verification__c from Assigned_Task__c]);
    }
}