trigger Employee on Employee_Associated_with_Mentors__c (before insert) {
    
    for(Employee_Associated_with_Mentors__c a:Trigger.New){
       List<Employee_Associated_with_Mentors__c> mynew=[Select id,SMI_Employee__c from Employee_Associated_with_Mentors__c where SMI_Employee__c=:a.SMI_Employee__c];
        If(mynew.size()>0) {
            a.SMI_Employee__c.addError('Employee Already Created');
        }
            
        }

}