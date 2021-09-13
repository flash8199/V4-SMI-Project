public with sharing class statusController {
    public statusController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Employee_Associated_with_Mentors__c> getStatusList() {
        return [
            Select Id, SMI_Employee__r.Name, Onboarding_End_Date__c, Onboarding_Status__c
            FROM Employee_Associated_with_Mentors__c
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }
}