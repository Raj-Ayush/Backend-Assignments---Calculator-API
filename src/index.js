const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const minLim = -1000000;
const maxLim = 1000000;
app.post('/add', (req, res) => {
    const n1= req.body.num1;
    const n2= req.body.num2;
    if(typeof n1 === 'string' || typeof n2 === 'string'){
        res.send({
            status: 'error',
            message: "Invalid data types"
        });
    } 
    else if(n1<minLimit || n2<minLimit || (n1+n2<minLimit)){
        res.send({
            status: 'error',
            message: 'Underflow'
        });
    }
    else if(n1>minLimit || n2>minLimit || (n1+n2>minLimit)){
        res.send({
            status: 'error',
            message: 'Overflow'
        });
    }
    else{
        res.send({
            status: 'sucess',
            message: 'the sum of given two numbers',
            sum: num1 + num2
        });
    }
});

app.post('/sub', (req, res) =>{
    const n1 = req.body.num1;  
    const n2 = req.body.num2; 
    if(typeof n1 =='string' || typeof n2 =='string' )
    {
        res.send({
            status: 'error',
            message: 'Invalid data types',
        });
    }
    else if(n1<minLimit || n2<minLimit || (n1-n2<minLimit)){
        res.send({
            status: 'error',
            message: 'Underflow'
        });
    }
    else if(n1>maxLimit || n2> maxLimit || (n1-n2>maxLimit)){
        res.send({
            staus:'error',
            message:'Overflow'
        });
    }
    else{
        res.send({
            status: 'success',
            message:'the difference of given two numbers',
            difference: n1-n2
        });
    }
});

app.post('/multiply', (req, res) => {
    const n1 = req.body.num1;  
    const n2 = req.body.num2; 
    if(typeof n1 =='string' || typeof n2 =='string')
    {
        res.send({
            status: 'error',
            message: 'Invalid data types'
        });
    }
    else if(n1<minLimit || n2<minLimit || (n1*n2<minLimit))
    {
        res.send({
            status: 'error',
            message: 'Underflow'
        });
    }
    else if (n1>maxLimit || n2> maxLimit || (n1*n2>maxLimit))
    {
        res.send({
            staus:'error',
            message:'Overflow'
        });
    }
    else{
        res.send({
            status: 'success',
            message:'the product of given two numbers',
            result: n1*n2
        });
    }
});

app.post('/divide',(req,res)=>
{
    
    const n1 = req.body.num1;  
    const n2 = req.body.num2; 
    if(typeof n1 =='string' || typeof n2 =='string')
    {
        res.send({
            status: 'error',
            message: 'Invalid data types',
        });
    }
    if(n1<minLimit || n2<minLimit)
    {
        res.send({
            status: 'error',
            message: 'Underflow',
        });
    }
    else if (n1>maxLimit || n2> maxLimit)
    {
        res.send({
            staus:'error',
            message:'Overflow',
        });
    }
    else if ( n2== 0)
    {
        res.send({
            staus:'error',
            message:'Cannot divide by zero',
        });
    }
    else{
        res.send({
            status: 'success',
            message:'the division of given two numbers',
            result: n1/n2,
        });
    }	
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;