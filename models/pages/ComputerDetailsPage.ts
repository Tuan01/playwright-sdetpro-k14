import {Locator, Page} from "@playwright/test";
import ComputerEssentialComponent from "../components/computer/ComputerEssentialComponent";

type ComputerComponentConstructor<T extends ComputerEssentialComponent> = new(component: Locator) => T;

export default class ComputerDetailsPage {

    constructor(private page: Page) {
        this.page = page;
    }

    // Boundary Generic type
    computerComp<T extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<T>
    ): T{
        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }

}   