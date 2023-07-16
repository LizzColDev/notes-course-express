const express = require ('express');
const {programation} = require('../data/courses.js').infoCourses;

const routerProgramation = express.Router();

// middleware 
routerProgramation.use(express.json());

routerProgramation.get('/:language', (req, res) =>{
  const language =  req.params.language;
  const results = programation.filter(course => course.language === language)
  if(results.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${language}.`)
  };

  if(req.query.sort === 'views'){
    return res.send(JSON.stringify(results.sort((a, b) => a.views - b.views)))
  };  
  res.send(JSON.stringify(results))
});

routerProgramation.get('/', (req, res) =>{
  res.send(JSON.stringify(programation))
});

routerProgramation.get('/:language/:level', (req, res) =>{
  const language =  req.params.language;
  const level = req.params.level;
  const results = programation.filter(course => course.language === language && course.level === level)
  if(results.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${language} de nivel ${level}.`)
  }
  res.send(JSON.stringify(results))
});

// post
routerProgramation.post('/', (req, res) =>{
  let newCourse = req.body;
  programation.push(newCourse);
  res.send(JSON.stringify(programation));
});

// put

routerProgramation.put('/:id', (req, res) =>{
  const currentCourse = req.body;
  const id = req.params.id;

  const index = programation.findIndex(course => course.id == id);

  if(index >= 0){
    programation[index] = currentCourse;
  }

  res.send(JSON.stringify(programation));

});

module.exports = routerProgramation;