public with sharing class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getHighRevenueAccountRecords() 
    {
        try
        {
            return [Select Id, Name , AnnualRevenue from Account order by AnnualRevenue Desc NULLS LAST LIMIT 5];
        }
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }

    }
}