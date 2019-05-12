const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Samdos/students');
// const mongoURI = "mongodb://samdos:emmanuel1@ds123196.mlab.com:23196/samdos";
// const db = mongoose.connect(mongoURI);

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

        StudentNames: String,
        StudentPhoneNumbers: String,
        StudentEmails: String,
        Address: String,
        Gender: String,
        Faculty: String,
        Dept: String,
        Level: String,
        Course: String,
        Classes: String,
        Days: String,
        classTime: String,

    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('students', TweetSchema);