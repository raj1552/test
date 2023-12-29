const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Yesley chai kun file mero '/' Home page mah falni vaneko / vanna le jailey ni home ho index.html file
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port , (req, res) =>{
    console.log(`Iam listening to port ${port}`)
})