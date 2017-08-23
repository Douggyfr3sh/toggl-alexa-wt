//use latest; //ES6- Had problems with this.

//Require statements for async code and mongodb interface
/* Used guide at:

https://auth0.com/blog/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/
*/
//var parallel = require('async').parallel;
var MongoClient = require('mongodb').MongoClient;


//This Fn stores a new task's data to MongoDB
function save_task(doc, db, cb) {
  //store new data to our mLab DB
  db
    .collection('Tasks')
    .insertOne(doc, function (err, res) {
      if (err) return cb(err);

      console.log(`Successfully saved ${doc.description} task!`);

      cb(null);
    });
}


//Main entry function
module.exports = function (ctx, done) {
  console.log(ctx);

  //Connect to MongoDB to store data
  MongoClient.connect(ctx.data.MONGO_URL, (err,db) => {

    if (err) return done(err);

    //define the data to be saved in a document
    var doc = {
      project: ctx.data.project || 'None',
      duration: ctx.data.duration || 0,
      description: ctx.data.description || 'N/A',
      timestamp: Date.now()
    }

    save_task(doc,db, function (err) {
      if (err) return done(err);

      done(null, 'Success.');
    });

  });

}