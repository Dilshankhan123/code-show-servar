const express = require('express');
const app = express();
app.use(express.json());
const books = [{title:'dilshan khan', id: 1}, {title: 'dildar khan', id: 2}, {title: 'gudiya begum', id: 3}]
app.get('/book', (req,res) => { 
res.send(books);
})
app.listen(5000);