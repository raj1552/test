const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(express.urlencoded({ extended: false }));
app.use(cors())

const dummyArray = [{
    'Name' : 'Anuraj',
    'Age' : '20'
},
{
    'Name' : 'kshitz',
    'Age' : '20'
},
{
    'Name' : 'Prakash',
    'Age' : '20'
}]

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/data', (req , res) =>{
   res.json(dummyArray) 
})

app.listen(port , (req, res) =>{
    console.log(`Iam listening to port ${port}`)
})