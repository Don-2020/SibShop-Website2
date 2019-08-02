module.exports = function (sequelize, DataTypes) {

    var Chapter = sequelize.define("Chapter", {
        Title: DataTypes.STRING(1000),
        Location: DataTypes.STRING(1000),
        image:DataTypes.STRING(1000),
        info: DataTypes.STRING(1000),
        contact: DataTypes.STRING(1000)
    },
    {freezeTableName: true}
    );
    return Chapter;
}