import { GooglePage } from "../Po/google-po";
import { browser } from "protractor";

describe("Google functionlity", function(){
    let page=new GooglePage();
    browser.ignoreSynchronization=true

    it("Enter text in search bar", function(){
        page.launchApplication();
        page.enterTextToSearch('Angular');
        browser.sleep(100000);
    })
})
