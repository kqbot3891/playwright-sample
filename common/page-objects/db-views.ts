import { Page } from "@playwright/test";
import { BackupPage } from "./backup/backup-page";
import BasePage from "./common/base-view";
import { LoginPage } from "./common/login-page";
import { HomePage } from "./common/home-page";
import { WaffleMenu } from "./menu/waffle-menu";
import { WelcomeBackupModal } from "./modal/backup/welcome-backup-modal";

export class DbViews {
    
    private static map: Map<String, BasePage> = new Map<String, BasePage>();

    static waffleMenu(page: Page) : WaffleMenu {
        let name = WaffleMenu.name;
        if (!this.map.has(name)) {
            this.map.set(name, new WaffleMenu(page)); ;
        }
        return this.map.get(name) as WaffleMenu;
    }

    static loginPage(page: Page) : LoginPage {
        let name = LoginPage.name;
        if (!this.map.has(name)) {
            this.map.set(name, new LoginPage(page)); ;
        }
        return this.map.get(name) as LoginPage;
    }

    static homePage(page: Page) : HomePage {
        let name = HomePage.name;
        if (!this.map.has(name)) {
            this.map.set(name, new HomePage(page)); ;
        }
        return this.map.get(name) as HomePage;
    }

    static backupPage(page: Page) : BackupPage {
        let name = BackupPage.name;
        if (!this.map.has(name)) {
            this.map.set(name, new BackupPage(page)); ;
        }
        return this.map.get(name) as BackupPage;
    }

    static welcomeBackupModal(page: Page) : WelcomeBackupModal {
        let name = WelcomeBackupModal.name;
        if (!this.map.has(name)) {
            this.map.set(name, new WelcomeBackupModal(page)); ;
        }
        return this.map.get(name) as WelcomeBackupModal;
    }

}