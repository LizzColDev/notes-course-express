const express = require ('express');
const {programation} = require('../data/courses.js').infoCourses;

const routerProgramation = express.Router();

// middleware 
routerProgramation.use(express.json());

routerProgramation.get('/:language', (req, res) =>{
  const language =  req.params.language;
  const results = programation.filter(course => course.language === language)
  if(results.length === 0){
    // return res.status(404).send(`No se encontraron cursos de ${language}.`)
    return res.status(404).end();

  };

  if(req.query.sort === 'views'){
    return res.json(results.sort((a, b) => a.views - b.views))
  };  
  res.json(results);
});

routerProgramation.get('/', (req, res) =>{
  res.json(programation);
});

routerProgramation.get('/:language/:level', (req, res) =>{
  const language =  req.params.language;
  const level = req.params.level;
  const results = programation.filter(course => course.language === language && course.level === level)
  if(results.length === 0){
    // return res.status(404).send(`No se encontraron cursos de ${language} de nivel ${level}.`)
    return res.status(404).end();

  }
  res.json(results);
});

// post
routerProgramation.post('/', (req, res) =>{
  let newCourse = req.body;
  programation.push(newCourse);
  res.json(programation);
});

// put

routerProgramation.put('/:id', (req, res) =>{
  const currentCourse = req.body;
  const id = req.params.id;

  const index = programation.findIndex(course => course.id == id);

  if(index >= 0){
    programation[index] = currentCourse;
  }

  res.json(programation);

});

// patch

routerProgramation.patch('/:id', (req, res)=>{
  const currentInfo = req.body;
  const id = req.params.id;

  
  const index = programation.findIndex(course => course.id == id);
  
  if(index >= 0){
    const modifiedCourse = programation[index];
    Object.assign(modifiedCourse, currentInfo);
  }
  res.json(programation);
});

routerProgramation.delete('/:id', (req, res) =>{
  const id = req.params.id;
  const index = programation.findIndex(course =>course.id == id);

  if(index >= 0){
    programation.splice(index, 1);
  };

  res.json(programation);
});


module.exports = routerProgramation;