import { LightningElement } from 'lwc';

export default class RenderConditionalComponent extends LightningElement 
{
    isClicked = true;

    handleClick()
    {
        if(this.isClicked == true)
        {
            this.isClicked = false;
        }
        else
        {
            this.isClicked = true;
        }
    }
}