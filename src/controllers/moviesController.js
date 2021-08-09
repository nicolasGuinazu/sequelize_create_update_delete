const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
//Otra forma de llamar a los modelos
const Movie = db.Movie;

const moviesController = {
    list: async (req, res) => {
        let movieList=[]
        try{
            movieList=await Movie.findAll();
            return res.render('moviesList',{movieList})
        }catch(err){
            console.log(err)
        }
            
    },
    detail: async (req, res) => {
        try{
            movie=await Movie.findByPk(req.params.id,{
                include:[{association:"genre"}]
            });
            return res.render('moviesDetail',{movie})
        }catch(err){
            console.log(err)
        }
    },
    new:(req, res) => {
        return res.render('moviesAdd') 
        
    },
    recommended: async(req, res) => {
        let order;
        if(req.params.order==='asc'){
            order='ASC'
        }else{
            order='DESC'
        }
        try{
            movies=await Movie.findAll({
                where:{
                    rating: {
                        [Op.gt]: 7
                      }
                },
                order: [
                    
                    ['rating', order],
                ]
            });
            return res.render('recommendedMovies',{movies}) 
        }catch(err){
            console.log(err)
        } 
        
    }, 
    create: async function (req, res) {
         try{
            movie=await Movie.create(req.body);
            return res.redirect('/movies')
        }catch(err){
            console.log(err)
        } 
    },
    delete: async function (req, res) {
        try{
            movie=await Movie.findByPk(req.params.id);
            return res.render('moviesDelete.ejs',{movie});
        }catch(err){
            console.log(err)
        }
        
    },
    edit: async function (req, res) {
        try{
            movie=await Movie.findByPk(req.params.id);
            return res.render('moviesEdit',{movie});
        }catch(err){
            console.log(err)
        }
        
    },
    processEdit: async function (req, res) {
        try{
            editedMovie=await Movie.update(req.body,{
                where:{id:req.params.id}
            });
            return res.redirect('/movies')
        }catch(err){
            console.log(err)
        }
        
    },
    destroy: async function (req, res) {
        try{
            movie=await Movie.destroy({
                where:{id:req.params.id}
            });
            return res.redirect('/movies');
        }catch(err){
            console.log(err)
        }
    }

}

module.exports = moviesController;