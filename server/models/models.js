const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Worker = sequelize.define('worker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})
const Training = sequelize.define('training', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    time: {type: DataTypes.STRING},
    type_of_training: {type: DataTypes.STRING},
    busy: {type: DataTypes.STRING, defaultValue: "FREE"}
})
const Subscription = sequelize.define('subs', {
    count: {type: DataTypes.INTEGER},
})
const SoldSubscription = sequelize.define('soldSubs', {
    sold_count: {type: DataTypes.INTEGER}
})

module.exports = {
    Worker,
    Training,
    Subscription,
    SoldSubscription
}