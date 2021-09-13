@isTest
public class mentorcontrollerTest {
    
    @isTest
	static void testset(){
    SMI_Mentor__c e = new SMI_Mentor__c (Name = 'Sales Mentor');
    insert e;
    Test.startTest();
    SMI_Mentor__c testset = [SELECT Name FROM SMI_Mentor__c LIMIT 1];
    Test.stopTest();
    System.assertEquals(testset, e);
	}
    
    @isTest
    static SMI_Mentor__c[] test1(){
        List<SMI_Mentor__c> mentortest = mentorController.searchMentor('a');
        return mentortest;
    }

}