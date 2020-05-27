const {Builder,By,Key,util}= require("selenium-webdriver");
require('chromedriver');
async function test(){
    var doThis = "login";
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("localhost:8000");
    var title = await driver.getTitle();

    var url = await driver.getCurrentUrl();

    console.log("Title on OPEN: "+title);
    console.log("URL on OPEN: "+url);

    await driver.findElement(By.name('name')).sendKeys("student");
    await driver.findElement(By.name('pw')).sendKeys("student");
    if(doThis=='login') {
        await driver.findElement(By.name('login')).click();
    }
    if(doThis=='register'){
        await driver.findElement(By.name('register')).click();
    }

    title = await driver.getTitle();
    url = await driver.getCurrentUrl();

    console.log("Title change: "+title)
    console.log("URL change: "+url);
    //await driver.quit();
}
test();
