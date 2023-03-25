const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type: 'string',
        required: true
    },
    exam:{
        type: 'string',
        required: true
    },
    current_level:{
        type: 'string',
        required: true
    },
    aim:{
        type: 'string',
        required: true
    },
    purpose:{
        type: 'string',
        required: true
    },
    deadline:{
        type: 'string',
        required: true
    }
}, { timestamps:true })



module.exports = mongoose.model('User', userSchema);