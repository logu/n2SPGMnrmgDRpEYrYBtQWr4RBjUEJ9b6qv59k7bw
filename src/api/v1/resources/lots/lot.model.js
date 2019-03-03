const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema

const lotSchema = new Schema({
  client:  { type: 'ObjectId', ref: 'Client' },
  surface: Number
})
lotSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Lot', lotSchema)
