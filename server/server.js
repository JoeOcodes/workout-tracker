import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());                         //body parsing middleware for req.body
app.use(express.urlencoded({ extended: true })); //body parsing middleware for req.body



import workoutRoutes from './routes/workouts.js';
app.use("/api/workouts", workoutRoutes);


app.get('/', (req, res) => {
    console.log(" / route");
    res.send('<h1> root route...</h1>')
});



app.get('/{*path}', (req, res) => {
    console.log(" catch-all route test");
    res.send('<h1> * route test...</h1>')
});


app.listen(PORT, () => {
    console.log(`Port ${PORT}...`);
});
