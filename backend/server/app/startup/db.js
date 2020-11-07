const mongoose = require('mongoose');

module.exports = () => {
   


    /*
     useNewUrlParser: true >>>>
     DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
     useCreateIndex: true >>>>
     DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
     useFindAndModify: false >>>>
     DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
    */
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect(`mongodb://localhost:27017/campTravel`, options)
        .then(() => console.log('connected the DataBase'))
        .catch(err => console.log(err.message));

    
    

    // mongoose.connect("mongodb+srv://dohakamalelzrka94:doha_developer1994@cluster0-hehv2.mongodb.net/trainer-center-manager",options)
    // .then(() => console.log('connected the DataBase'))
    // .catch(err => console.log(err.message));
};
mongoose.set('useFindAndModify', false);
