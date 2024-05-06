import FooterColumnComponent from "./FooterColumnComponent";
import {Locator} from "@playwright/test";

export default class AccountColumnComponent extends FooterColumnComponent {

    public static selector: string = ".column.customer-service";

    constructor(component: Locator) {
        super(component);
    }
    
}