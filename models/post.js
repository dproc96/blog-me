module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Posts;
}