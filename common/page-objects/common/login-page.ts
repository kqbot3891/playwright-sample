import { expect, Locator, Page } from "@playwright/test";
import { DbViews } from "../db-views";
import BaseView from "./base-view";

export class LoginPage extends BaseView {

    static instance: LoginPage;

    readonly page: Page;
    readonly emailFld: Locator;
    readonly passwordFld: Locator;
    readonly signinBtn: Locator;

    constructor(page: Page) {
        super(page, 'login');
        this.page = page;
        this.emailFld = page.locator('[name="login_email"]');
        this.passwordFld = page.locator('[name="login_password"]');
        this.signinBtn = page.locator('[class="signin-text"]');
    }

    async signIn(username: string, password: string) {
        await this.emailFld.type(username);
        await this.passwordFld.type(password);
        await this.signinBtn.click();
        await expect(DbViews.waffleMenu(this.page).trigger).toBeVisible({timeout: 60000});
    }
}