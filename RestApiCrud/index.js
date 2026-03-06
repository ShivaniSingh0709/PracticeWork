const express = require('express');
const app = express();
const Path = require('path');
const uuid = require('uuid');

let port = 1111;
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.set('view engine','ejs');
app.set('views',Path.join(__dirname,'views'));  // Set the views directory to the 'views' folder in the current directory

app.use(express.static(Path.join(__dirname,'public'))); // Serve static files from the 'public' folder in the current directory

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

let articles = [
    {
        id: uuid.v4(),
        title: 'Article 1',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        content: 'This is the content of Article 1.'
    },
    {
        id: uuid.v4(),
        title: 'Article 2',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        content: 'This is the content of Article 2.'
    },
    {
        id: uuid.v4(),
        title: 'Article 3',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        content: 'This is the content of Article 3.'
    },
    {
        id: uuid.v4(),
        title: 'Article 4',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        content: 'This is the content of Article 4.'
    },
    {
        id: uuid.v4(),
        title: 'Article 5', 
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        content: 'This is the content of Article 5.'
    },
    {
        id: uuid.v4(),
        title: 'Article 6',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        content: 'This is the content of Article 6.'
    }
]
app.get('/posts',(req,res)=>{
    // res.send('Hello World');
    res.render('index.ejs',{articles});
});
app.get('/posts/new',(req,res)=>{

    res.render('new.ejs');
}); 

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params;
    let article = articles.find((a) => id == a.id);
    res.render('show.ejs',{article});
});

app.post('/posts',(req,res)=>{
    let id = uuid.v4();
    const { title, img, content } = req.body;
    articles.push({ id, title, img, content });
    res.redirect('/posts'); // Redirect to the /posts route after adding the new article
});