module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'actors',
        timestamps: false
    };
    const Actor = sequelize.define(alias, cols, config)

    Actor.associate=function(models){
        Actor.belongsToMany(models.Movie,{
            as:'movies',
            through:'actor_movie',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            timestamps: false
        })
    }
    
    return Actor
}