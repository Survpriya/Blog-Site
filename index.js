const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const BlogModel = require('./models/Blogs')
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'});
const fs = require ('fs');
const app = express()


app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb://127.0.0.1:27017/User'); 

app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success");
            } else{
                res.json("the password is incorrect");
            }
        } else{
            res.json("No record existed") ;
        }
    }) 
})

app.post("/register", (req, res)=>{
    console.log("Server running");
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post('/post',uploadMiddleware.single('file'), async (req,res)=>{
    const { originalname , path } = req.file;
    const newPath = path+'.'+originalname;
    fs.renameSync(path, newPath );
    const {title, summary, content}= req.body;
    const BlogDoc= await BlogModel.create({
        title,
        summary,
        content,
        cover: newPath,
        // author: info.id
    });
    res.json({BlogDoc});
});

app.get('/post', async (req,res)=>{
    res.json(
        await BlogModel.find()
        // .populate('author', ['name'])
        .sort({createdAt: -1})
        .limit(20)
    )
})

app.listen(3000, ()=>{
console.log("Server is running")
})
