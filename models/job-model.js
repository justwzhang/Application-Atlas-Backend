const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema(
    {
        // my app stuff
        owner:{type:String, required:true},
        collectionName:{type:String, required:true},

        // the important stuff
        dateApplied:{type:Number, required:true},
        company:{type:String, required:true},
        position:{type:String, required:true},
        jobid:{type:Number, required:false},
        url:{type:Number, required:true},
        status:{type:String, required:true},

        // not necessary but nice
        jobDisc:{type:String, required:false},
        benefits:{type:String, required:false},
        location:{type:String, required:false},
        website:{type:String, required:false},
        referal:{type:String, required:false},


    },
    { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema)