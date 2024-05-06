import {Locator} from "@playwright/test";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomerServiceColumnComponent from "./CustomerServiceColumnComponent";
import AccountColumnComponent from "./AccountColumnComponent";
import FollowUsColumnComponent from "./FollowUsColumnComponent";

export default class FooterComponent {

    public static selector: string = ".footer";

    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComponent(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.selector));
    }

    customerServiceColumnComponent(): CustomerServiceColumnComponent {
        return new CustomerServiceColumnComponent(this.component.locator(CustomerServiceColumnComponent.selector));
    }

    accountColumnComponent(): AccountColumnComponent {
        return new AccountColumnComponent(this.component.locator(AccountColumnComponent.selector));
    }

    followUsColumnComponent(): FollowUsColumnComponent {
        return new FollowUsColumnComponent(this.component.locator(FollowUsColumnComponent.selector));
    }
    
}