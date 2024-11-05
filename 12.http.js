const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome To Our Home Page')
    }

    if (req.url === '/about') {
        res.end('Here is our short')
    }

    res.end(`<h1>OOPPS! We can't seem to find the page</h1>`)

})


server.listen(5000)