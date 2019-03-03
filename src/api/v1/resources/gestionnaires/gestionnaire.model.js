const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema

const gestionnaireSchema = new Schema({
  fullname:  String,
  numero: Schema.Types.Mixed
});
gestionnaireSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Gestionnaire', gestionnaireSchema)
