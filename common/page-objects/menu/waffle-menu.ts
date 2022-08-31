import { Locator, Page } from "@playwright/test";
import BaseView from "../common/base-view";

export class WaffleMenu extends BaseView {

    readonly trigger: Locator;
    
    constructor(page: Page) {
        super(page, '');
        this.trigger = page.locator('[data-testid="digWaffleMenuTrigger"]');
    }
    

}