import FooterColumnComponent from "./FooterColumnComponent";
import {Locator} from "@playwright/test";

export default class FollowUsColumnComponent extends FooterColumnComponent {

    public static selector: string = ".column.customer-service";

    constructor(component: Locator) {
        super(component);
    }
    
}