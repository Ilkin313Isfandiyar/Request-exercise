const express = require('express')

const app = express()

// const obj = JSON.parse('./data.json')

const obj = [
    { "name": "Lays", "type": "Chips", "id": 1, "price": 2.60},
    { "name": "Doritos", "type": "Chips" , "id": 2, "price": 2.80},
    { "name": "ClearMan", "type": "Shampoo" , "id": 3, "price": 6.80},
    { "name": "Coca-cola", "type": "Drink", "id": 4 , "price": 0.80},
    { "name": "Milk", "type": "Drink" , "id": 5, "price": 1.30},
    { "name": "Apple", "type": "Fruits" , "id": 6, "price": 3.00}
  ]

app.get('/',(req,res)=>{
    res.send("Salam")
})

app.get('/card',(req,res)=>{



    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);

    console.log(count,offset)

    const newData = obj.slice(offset, offset + count)

    res.json({ users: newData, count: obj.length });


})

app.get('/card/:id',(req,res)=>{

    const idOfUser = parseInt(req.params.id);
    const user = obj.find((user) => user.id === idOfUser);
    
    if (!user) {
      res.send("ERROR DU SEN OL ERRORDU")
    }
   else{
       res.send(user)
   }




})

app.listen(5000,(error)=>{
    if(!error){
        console.log("Server isleyir")
    }
    else {
        console.log("Server islemir")
    }
})