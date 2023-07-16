const express = require ('express');
const {maths} = require('../data/courses.js').infoCourses;;

const routerMaths = express.Router();

routerMaths.get('/', (req, res) =>{
  res.send(JSON.stringify(maths))
});

routerMaths.get('/:topic', (req, res) =>{
  const topic =  req.params.topic;
  const results = maths.filter(course => course.topic === topic)
  if(results.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${topic}.`)
  }
  res.send(JSON.stringify(results))
});

module.exports = routerMaths;