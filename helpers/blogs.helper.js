const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const ObjectId = require('bson').ObjectId;

module.exports = async function(id){
	const client = await MongoClient.connect(process.env.NAA_DB_URI,
		{ 
     		useNewUrlParser: true,
      		useUnifiedTopology: true
    	})


    let naa_db = await client.db(process.env.NAA_NS);
    let blogs_collection = await naa_db.collection('blogs');

  	let blog = await blogs_collection.findOneAndUpdate(
    {
      _id:ObjectId(id)
    },
    {
		$inc:
		{
			views:1
		}
	})

	return blog.value;
}