const db = require('../database/models');
const sequelize = db.sequelize;

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
            movie=await Movie.findByPk(req.params.id);
            return res.render('moviesDetail',{movie})
        }catch(err){
            console.log(err)
        }
    },
    new:(req, res) => {
        return res.render('moviesAdd')
       
        
    },
    recomended: (req, res) => {
        
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        res.render('moviesAdd.ejs');
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