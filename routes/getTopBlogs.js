const express = require('express');

let router = express.Router();
const path = require('path');

let BlogsDao = require(path.join(__dirname,'..','src','blogsDao.js'));

var redis = require('redis');

var client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

router.get('/topBlogs/:postType?',(req,res)=>{

	let topBlogs;

	client.get(req.originalUrl),async (err,reply)=>{
		if(err || !reply)
		{

			try{
			
				topBlogs = await BlogsDao.getTopBlogs(req.params.postType);	
			
			}
			
			catch(e){
			
				return res.status(500).json({error:"Unable to get the blogs",message:e.message});
			
			}

			return res.status(200).json(topBlogs);
		}
		else
		{
			return res.status(200).json(reply);
		}
	}
})

module.exports = router;
