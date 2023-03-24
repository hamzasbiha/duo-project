const express=require("express")
const cors =require('cors');
const port = 5000;
const app = express();
app.use(express.json())
app.use(cors())
const chat=require("./dummydata")
const PORT=5000;

app.get("/api/users",(req,res)=>{
    res.json(chat)
})
app.get("/api/chat/:id",(req,res)=>{
    const OneChat=chat.chats
})







app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    })