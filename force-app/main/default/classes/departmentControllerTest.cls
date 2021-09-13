@isTest
public class departmentControllerTest {
    
    @isTest
	static void testset(){
    OnBoarding_Step__c e = new OnBoarding_Step__c (Name = 'Know your role');
    insert e;
    Test.startTest();
    OnBoarding_Step__c testset = [SELECT Name FROM OnBoarding_Step__c LIMIT 1];
    Test.stopTest();
    System.assertEquals(testset, e);
	}
    
    @isTest
    static OnBoarding_Step__c[] test1(){
        List<OnBoarding_Step__c> onboardingtest = departmentController.getDepartmentRecord();
        return onboardingtest;
    }

}