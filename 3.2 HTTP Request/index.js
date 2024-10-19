import express from 'express';
const port = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('my name is nooralam siwan bihar');
})

app.post('/about', (req, res) => {
    res.sendStatus(201);
})

app.put("/register", (req, res) => {
    res.sendStatus(200);
})
app.patch("/user/NOORALAm", (req, res) => {
    res.sendStatus(200);
})
app.delete("/contact", (req, res) => {
    res.sendStatus(200);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})