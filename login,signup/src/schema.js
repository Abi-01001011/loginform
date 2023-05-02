const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    email:{
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    }
},{timestamps: true});

const ldata = mongoose.model("loginschema",data);
module.exports = ldata;