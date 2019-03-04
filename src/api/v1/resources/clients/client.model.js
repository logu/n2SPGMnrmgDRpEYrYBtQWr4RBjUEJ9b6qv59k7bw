const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema

const clientSchema = new Schema({
  fullname:  String,
  email: String,
  email2: {type: String, select: false },
  telDomicile: {type: String, select: false },
  telPro: {type: String, select: false },
  telMobile: {type: String, select: false },
  telMobile2: {type: String, select: false },
  fax: {type: String, select: false },
  sexe: {type: String, select: false }
})
clientSchema.virtual('lotsCount', {
  ref: 'Lot',
  localField: '_id',
  foreignField: 'client', // the field on the Story document to match with the ID
  count: true
})
clientSchema.set('toJSON', {
  virtuals: true
})
clientSchema.options.toJSON.transform = function (doc, ret, options) {
  delete ret._id;
  delete ret.__v;
}
clientSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Client', clientSchema)
