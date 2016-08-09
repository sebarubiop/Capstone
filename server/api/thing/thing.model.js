'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')) ,Schema = mongoose.Schema;

var ThingSchema = new mongoose.Schema({
  encnum: String,
  encdate: String,
  starttime: String,
  finishtime: String,
  medicare:[String],
  nonmedicare: Number,
  patient:{
     sex: String,
     post: Number,
     dob: String,
     seenbygp: Boolean,
     condition:{
       newpatient: Boolean,
       healthcare: Boolean,
       veteran: Boolean,
       nesb: Boolean,
       aboriginal: Boolean,
       torres: Boolean
     },
     height: Number,
     weight: Number,
     smoking: Number,
     drinking: Number,
     drinks: Number,
     moredrink: Number
  },
  reason:[{
     rnum: Number,
     name: String,
     diagnosis:[{
	      name: String,
        status: [Number],
	      drug:[{
	        name:String,
	        strength: String,
	        dose: String,
	        freq: String,
	        norep: Number,
          status: String,
          otc: Boolean,
          gpsupply:Boolean
	       }],
	      procedure:[{
	         name: String,
 	         nurse: Boolean,
        }]
     }]
  }],
  referral:[{
     name: String,
     reasonnum: [Number]
  }],
  imaging:[{
     name: String,
     bodysite: String,
     reasonnum: [Number]
  }],
  pathology:[{
     name: String,
     reasonnum: [Number]
  }],
  owner:{
     type: Schema.ObjectId,
     ref:'User'
  }
});

export default mongoose.model('Thing', ThingSchema);
