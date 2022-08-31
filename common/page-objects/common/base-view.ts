import { Page } from "@playwright/test";

export default class BaseView {
    readonly page: Page;
    readonly url: string;

    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
    }

    public async navigateToPage() {
        await this.page.goto(this.url);
    }
}