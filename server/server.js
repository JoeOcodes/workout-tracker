import express from 'express';

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    res.send('<h1>test route is working...</h1>');
});

app.listen(PORT, () => {
    console.log(`Testing if this initially works on port ${PORT}`);
})