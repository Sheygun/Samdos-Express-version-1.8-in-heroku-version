const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Samdos/webwork');
const mongoURI = "mongodb://samdos:emmanuel1@ds123196.mlab.com:23196/samdos";
const db = mongoose.connect(mongoURI);

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

        Name: String,
        PhoneNumber: String,
        Email: String,
        Address: String,
        Gender: String,
        DevType: String,
        Duration: String,
        Quality: String,
        Learn: String,

    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('webwork', TweetSchema);