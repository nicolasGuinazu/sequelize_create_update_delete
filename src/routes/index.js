var express = require('express');
var router = express.Router();
const db = require('../database/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Movies' });
});

router.get('/actor/:id', async(req, res, next)=>{
  let actor=await db.Actor.findByPk(req.params.id,{
    include:['movies']
  })
    
   return res.render('actorDetail',{actor});  
});

module.exports = router;
