import { element, by, browser } from "protractor";
import { TestBase } from "../Base/TestBase";

export class GooglePage extends TestBase{
    private searchBar=element(by.name('q'));

    public enterTextToSearch(text:string):void{
        this.searchBar.sendKeys(text);
    } 
}