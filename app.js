const express = require ('express');
const routerMaths = require('./routers/maths');
const routerProgramation = require('./routers/programation')
const app = express();

const {infoCourses} = require('./data/courses');

//Routers

app.use('/api/courses/programation', routerProgramation);

app.use('/api/courses/maths', routerMaths);

// Routing

app.get('/', (req, res) =>{
  res.send('Mi primer servidor. Curso Express');
});

app.get('/api/courses', (req, res) =>{
  res.send(JSON.stringify(infoCourses));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  console.log(`El servidor está escuchando en el puerto ${PORT}...`)
} );