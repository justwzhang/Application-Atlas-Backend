const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectionSchema = new Schema(
    {
        owner:{type:String, required:true},
        dateModified:{type:Number, required:true},
        collectionName:{type:String, required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Collection', CollectionSchema)