@isTest
public class taskControllerTest {
    
@isTest
static void testset(){
    Assigned_Task__c e = new Assigned_Task__c (Assigned_To__c = '0059D000002olJvQAI');
    insert e;
    Test.startTest();
    Assigned_Task__c testset = [SELECT Assigned_To__c FROM Assigned_Task__c LIMIT 1];
    Test.stopTest();
    System.assertEquals(testset, e);
	}
    
    @isTest
    static Assigned_Task__c[] test1(){
        List<Assigned_Task__c> assignedTest = taskController.getAssigendTask('a');
        return assignedTest;
    }
    
}