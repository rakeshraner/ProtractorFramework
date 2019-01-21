import { element, by, browser } from "protractor";

export class GooglePage{
    private searchBar=element(by.name('q'));

    public enterTextToSearch(text:string):void{
        this.searchBar.sendKeys(text);
    } 

    public launchApp():void{
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.get('https://www.google.com/');
    }
}