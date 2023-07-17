const express = require ('express');
const {maths} = require('../data/courses.js').infoCourses;;

const routerMaths = express.Router();

// middleware 
routerMaths.use(express.json());

routerMaths.get('/', (req, res) =>{
  res.json(maths)
});

routerMaths.get('/:topic', (req, res) =>{
  const topic =  req.params.topic;
  const results = maths.filter(course => course.topic === topic)
  if(results.length === 0){
    return res.status(404).end()
  }

  if(req.query.sort === 'views'){
    return res.json(results.sort((a, b) => b.views - a.views))
  };
  res.json(results)
});


routerMaths.post('/', (req, res) =>{
  let newCourse = req.body;
  maths.push(newCourse);
  res.json(maths);
});

routerMaths.put('/:id', (req, res) =>{
  const currentCourse = req.body;
  const id = req.params.id;

  const index = maths.findIndex(course => course.id == id);

  if(index>=0){
    maths[index] = currentCourse;
  } else{
    return res.status(404).end()
  }

  res.json(maths)
});

module.exports = routerMaths;