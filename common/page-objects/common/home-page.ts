import { Page } from "@playwright/test";
import BaseView from "./base-view";

export class HomePage extends BaseView {

    constructor(page: Page) {
        super(page, 'home');
    }
    
}