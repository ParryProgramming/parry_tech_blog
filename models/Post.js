const { Model , DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelname: 'post',
    }
);

module.exports = Post;