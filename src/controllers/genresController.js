const db = require('../database/models');
const sequelize = db.sequelize;
const Genre = db.Genre;

const genresController = {
    list: async (req, res) => {
        let genreList=[]
        try{
            genreList=await Genre.findAll();
            return res.render('genresList',{genreList})
        }catch(err){
            console.log(err)
        }
            
    },
    detail: async (req, res) => {
        try{
            genre=await Genre.findByPk(req.params.id);
            return res.render('genresDetail',{genre})
        }catch(err){
            console.log(err)
        }
    },

}

module.exports = genresController;