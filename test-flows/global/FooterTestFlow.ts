import {Page} from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";
import CustomerServiceColumnComponent from "../../models/components/global/footer/CustomerServiceColumnComponent";
import AccountColumnComponent from "../../models/components/global/footer/AccountColumnComponent";
import FollowUsColumnComponent from "../../models/components/global/footer/FollowUsColumnComponent";


export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    // Service method
    async verifyFooterComponent(): Promise<void> {
        await this.verifyInformationColumn();
        this.verifyCustomerServiceColumn();
        this.verifyMyAccountColumn();
        this.verifyFollowUsColumn();
    }

    // Support methods
    private async verifyInformationColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const informationColumnComp: InformationColumnComponent = footerComponent.informationColumnComponent();
        const title = await informationColumnComp.title().textContent();
        console.log(`title: ${title}`);
    }

    private async verifyCustomerServiceColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const customerServiceColumnComponent: CustomerServiceColumnComponent = footerComponent.customerServiceColumnComponent();
        const title = await customerServiceColumnComponent.title().textContent();
        console.log(`title: ${title}`);
    }

    private async verifyMyAccountColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const accountColumnComponent: AccountColumnComponent = footerComponent.accountColumnComponent();
        const title = await accountColumnComponent.title().textContent();
        console.log(`title: ${title}`);
    }

    private async verifyFollowUsColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const followUsColumnComponent: FollowUsColumnComponent = footerComponent.followUsColumnComponent();
        const title = await followUsColumnComponent.title().textContent();
        console.log(`title: ${title}`);
    }
}