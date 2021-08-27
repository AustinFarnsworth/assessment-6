import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})



test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Adding an x to the top left square', async() => {
    let topLeftSquare = await driver.findElement(By.id('cell-0'))
    await topLeftSquare.click()
    await driver.sleep(3000)
})

test('Adding an X to the middle left square', async() => {
    let middleLeftSquare = await driver.findElement(By.id('cell-3'))
    await middleLeftSquare.click()
    await driver.sleep(3000)
})

test('Adding an X to the bottom right square', async () => {
    let bottomLeftSquare = await driver.findElement(By.id('cell-6'))
    await bottomLeftSquare.click()
    await driver.sleep(3000)
})

afterAll(async () => {
    await driver.quit()
})