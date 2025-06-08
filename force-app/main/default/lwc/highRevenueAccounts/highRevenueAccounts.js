import { LightningElement,wire } from 'lwc';
import getHighRevenueAccountRecords from '@salesforce/apex/accountController.getHighRevenueAccountRecords';
export default class HighRevenueAccounts extends LightningElement 
{
    accountsToDisplay = [];
    @wire(getHighRevenueAccountRecords)
    getAccountsHandler(response)
    {
        // error:.... , data:....
        // error:undefined, data:....,
        //error:....,data:undefined
        console.log(response);
        const{data,error}=response;
        if(error){
            console.log(error);
        }
        if(data)
        {
            this.accountsToDisplay = data;
        }

    }
}