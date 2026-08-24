import express from 'express';

const router = express.Router();


// POST   /api/workouts create a workout
router.post('/', (req, res) => {
    console.log(" post /workouts route test...");
    const data = req.body
    console.log(JSON.stringify(data, null, 3));
    res.send('<h1>POST /workouts route...</h1>')
});

// GET    /api/workouts view all workouts
router.get('/', (req, res) => {
    console.log("get all /workouts route test...");
    res.send('<h1> GET all /Workouts route test...</h1>')
});

// GET    /api/workouts/:id view a specific workout
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(" get /workouts/:id route test...");
    console.log(`id is ${id}`);
    res.send('<h1>GET /workouts/:id route...</h1>')
});

// PATCH  /api/workouts/:id update a workout
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log("patch /workouts test...");
    res.send('<h1>PATCH /workouts/:id route...</h1>')
});

// DELETE /api/workouts/:id delete a workout 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log("delete /workouts test...");
    res.send('<h1>DELETE /workouts/:id route...</h1>')
});

export default router;