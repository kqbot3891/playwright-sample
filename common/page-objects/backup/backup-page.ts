import { Page } from "@playwright/test";
import BaseView from "../common/base-view";

export class BackupPage extends BaseView {

    constructor(page: Page) {
        super(page, 'backups');
    }
    
}