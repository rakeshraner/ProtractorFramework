import { browser } from "protractor";
const envVar = require('./POM/TestData/environmentVar.json');

export class TestBase{
    
    public launchApplication():void{
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
       // browser.manage().timeouts().pageLoadTimeout(3000);
        browser.get(envVar.URL);
    }
}