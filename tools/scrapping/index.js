const puppeteer = require('puppeteer'); //you need this one ; cause the next is executable

( async () => {
    //all the code
    console.log('launch browser')
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var titulo1 = await page.evaluate( () => {
        const h1 = document.querySelector('h1')
        console.log(h1.innerHTML)
        return h1.innerHTML
    })
    console.log(titulo1)
    console.log('closing browser')
    //browser.close()
})() //autoexect function first ( to exect) second () the params.