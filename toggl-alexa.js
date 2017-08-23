use latest; //ES6

//Require statements for async code and mongodb interface
/* Used guide at:

https://auth0.com/blog/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/
*/
var parallel = require('async').parallel;
var MongoClient = require('mongodb').MongoClient;


//Main entry function
module.exports = function (ctx, done) {

  console.log(ctx);

  //Connect to MongoDB to store data
  MongoClient.connect(ctx.dada.MONGO_URL, (err,db) => {

    if (err) return done(err);

    //define the data to be saved
    let doc = {
      project: ctx.data.project;,
      duration: ctx.data.duration,
      description: ctx.data.description,
      timestamp: Date.now()
    }

    //store new data to our mLab DB
    db
      .collection('Tasks')
      .insertOne(doc, (err, res) => {
        if (err) return err;

        console.log('Successfully saved ${doc.description} task!');

        done(null, 'Success');
      });


  });

  //done(null, 'Hello, ' + ctx.data.name);
}
