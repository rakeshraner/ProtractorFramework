"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_po_1 = require("../Po/google-po");
const protractor_1 = require("protractor");
describe("Google functionlity", function () {
    let page = new google_po_1.GooglePage();
    protractor_1.browser.ignoreSynchronization = true;
    it("Enter text in search bar", function () {
        page.launchApp();
        page.enterTextToSearch('Angular');
        protractor_1.browser.sleep(100000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QT00vU3BlYy9nb29nbGUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE2QztBQUM3QywyQ0FBcUM7QUFFckMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBQzVCLElBQUksSUFBSSxHQUFDLElBQUksc0JBQVUsRUFBRSxDQUFDO0lBQzFCLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFBO0lBRWxDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==