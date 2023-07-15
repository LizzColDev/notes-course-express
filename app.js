const express = require ('express');
const app = express();

const {infoCourses} = require('./courses');

//Routers

const routerProgramation = express.Router();
app.use('/api/courses/programation', routerProgramation);

const routerMaths = express.Router();
app.use('/api/courses/maths', routerMaths);

// Routing

app.get('/', (req, res) =>{
  res.send('Mi primer servidor. Curso Express');
});

app.get('/api/courses', (req, res) =>{
  res.send(JSON.stringify(infoCourses));
});

routerProgramation.get('/', (req, res) =>{
  res.send(JSON.stringify(infoCourses.programation))
});

routerMaths.get('/', (req, res) =>{
  res.send(JSON.stringify(infoCourses.maths))
});

routerProgramation.get('/:language', (req, res) =>{
  const language =  req.params.language;
  const results = infoCourses.programation.filter(course => course.language === language)
  if(results.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${language}.`)
  }

  if(req.query.sort === 'views'){
    return res.send(JSON.stringify(results.sort((a, b) => a.views - b.views)))
  }  
  res.send(JSON.stringify(results))
});

routerMaths.get('/:topic', (req, res) =>{
  const topic =  req.params.topic;
  const results = infoCourses.maths.filter(course => course.topic === topic)
  if(results.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${topic}.`)
  }
  res.send(JSON.stringify(results))
});

routerProgramation.get('/:language/:level', (req, res) =>{
  const language =  req.params.language;
  const level = req.params.level;
  const results = infoCourses.programation.filter(course => course.language === language && course.level === level)
  if(results.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${language} de nivel ${level}.`)
  }
  res.send(JSON.stringify(results))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  console.log(`El servidor está escuchando en el puerto ${PORT}...`)
} );