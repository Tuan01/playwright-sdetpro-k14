
import {test} from '@playwright/test';

test('Handle Dropdown option', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // Target the dropdown element
    const dropdownEle = await page.locator('#dropdown');

    // Select Option 1
    await dropdownEle.selectOption({index: 1});
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(1000);

    // Select option 2
    await dropdownEle.selectOption({value: '2'});
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(1000);

})

test('Handle iFrame', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    // Target the iframe using frameLocator
    const iframeEle = await page.frameLocator('iframe[id^="mce"]');

    // Find edit texxt area in the iframe
    const editTextAreaEle = await iframeEle.locator('body p');

    // Clear then input the new content
    await editTextAreaEle.click();
    await editTextAreaEle.clear();
    await editTextAreaEle.fill('New Content');

    // Interact with the main frame's elements
    const footerPowerByLinkEle = await page.locator('a:has-text("Elemental")');
    await footerPowerByLinkEle.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(2000);
})

test('Mouse hover and narrowdown searching scope', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    // Find all figures
    const allFigureEles = await page.locator('.figure').all();

    // Loop alll the figures
    for(const figureEle of allFigureEles){
        // and narrowdown searching scope
        const imgEle = await figureEle.locator('img');

        const usernameEle = await figureEle.locator('h5');
        const viewProfileHyperlinkEle = await figureEle.locator('a');
        const isUsernameVisible = await usernameEle.isVisible();
        const isViewProfileHyperlinkVisible = await viewProfileHyperlinkEle.isVisible();
        console.log(`isUsernameVisibleBefore: ${isUsernameVisible}`);
        console.log(`isViewProfileHyperlinkVisibleBefore: ${isViewProfileHyperlinkVisible}`);
        
        // Mouse hover
        await imgEle.hover();
        const isUsernameVisibleAfter = await usernameEle.isVisible();
        const isViewProfileHyperlinkVisibleAfter = await viewProfileHyperlinkEle.isVisible();
        console.log(`isUsernameVisibleAfter: ${isUsernameVisibleAfter}`);
        console.log(`isViewProfileHyperlinkVisible: ${isViewProfileHyperlinkVisibleAfter}`);

        console.log('\n\n');
        
        // DEBUG PURPOSE ONLY
        await page.waitForTimeout(1000);
    }
})

test('Checking element status and handle dynamic states', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_controls', {timeout: 10 * 1000});

    await page.waitForTimeout(9000);

    // Locate 2 parent components 
    const checkboxComp = await page.locator('#checkbox-example');
    const inputExampleComp = await page.locator('#input-example');

    // Interact with the checkbox component
    const checkboxEle = await checkboxComp.locator('#checkbox input');
    const isEnabled = await checkboxEle.isEnabled();
    let isSelected = await checkboxEle.isChecked();

    console.log(`Is checkbox enabled: ${isEnabled}`);
    console.log(`Is checkbox selected: ${isSelected}`);
    
    if(!isSelected){
        await checkboxEle.click();
    }
    
    let isSelectedAfter = await checkboxEle.isChecked();
    console.log(`Is checkbox selected after selecting: ${isSelectedAfter}`);
    if(!isSelectedAfter){
        await checkboxEle.click();
    }

    const removeBtnEle = await checkboxComp.locator('button');
    await removeBtnEle.click();
    await page.waitForSelector('#checkbox-example #checkbox input', {state: 'hidden', timeout: 5 * 1000})

})