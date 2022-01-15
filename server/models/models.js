const sequelize = require ('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define ('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    badgeNumber: {type: DataTypes.STRING, unique: true},
    //photo: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
})

const Case = sequelize.define ('case', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: "Расследуется"},
    description: {type: DataTypes.STRING}
})

// const FigurantCase = sequelize.define ('figurant_case', {
//     id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

const Figurant = sequelize.define ('figurant', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, allowNull: false},
    passport_num: {type: DataTypes.STRING, unique: true},
    address: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
})

const Log = sequelize.define ('log', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING}
})

// const TypeCase = sequelize.define ('type_case', {
//     id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// }) 

const Type = sequelize.define ('type', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    article: {type: DataTypes.STRING, allowNull: false},
})


User.hasMany(Case)
Case.belongsTo(User)

Case.hasMany(Figurant, {as: 'figurants'})
Figurant.belongsTo(Case,)

Case.hasMany(Log, {as: 'logs'})
Log.belongsTo(Case)

Type.hasMany(Case,)
Case.belongsTo(Type,)

module.exports = {
    User,
    Case,
    //FigurantCase,
    Figurant,
    Log,
    //TypeCase,
    Type
}