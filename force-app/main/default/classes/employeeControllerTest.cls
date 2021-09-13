@isTest
public class employeeControllerTest {
    @isTest
	static void testset(){
    Employee_Associated_with_Mentors__c e = new Employee_Associated_with_Mentors__c (SMI_Employee__c = '0059D000002olJvQAI');
    insert e;
    Test.startTest();
    Employee_Associated_with_Mentors__c testset = [SELECT SMI_Employee__c FROM Employee_Associated_with_Mentors__c LIMIT 1];
    Test.stopTest();
    System.assertEquals(testset, e);
	}
    
    
    @isTest
    static Employee_Associated_with_Mentors__c[] test1(){
        List<Employee_Associated_with_Mentors__c> employeetest = employeeController.searchEmployee('a');
        return employeetest;
    }

}