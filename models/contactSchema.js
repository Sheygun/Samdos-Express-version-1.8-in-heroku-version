const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/contact/lists');
// const mongoURI = "mongodb://samdos:emmanuel1@ds123196.mlab.com:23196/samdos";
// const db = mongoose.connect(mongoURI);

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

        Names: String,
        PhoneNumbers: String,
        Emails: String,
        Feedbacks: String,
        Messages: String,

    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('lists', TweetSchema);