import { Locator, Page } from "@playwright/test";
import BaseView from "../../common/base-view";

export class WelcomeBackupModal extends BaseView {

    readonly main: Locator;
    
    constructor(page: Page) {
        super(page, '');
        this.main = page.locator('div.dig-Modal-content');
    }
    

}