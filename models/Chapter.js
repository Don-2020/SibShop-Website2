module.exports = function (sequelize, Datatypes) {

    var Chapter = sequelize.define("Chapter", {
        Title: Datatypes.STRING(1000),
        Location: Datatypes.STRING(1000),
        image:Datatypes.STRING(1000),
        info: Datatypes.STRING(1000),
        contact: Datatypes.STRING(1000)
    },
    {freezeTableName: true}
    );
    return Chapter;
}