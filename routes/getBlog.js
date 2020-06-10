const express = require('express');

const path = require('path');

let router = express.Router();

let BlogsDao = require(path.join(__dirname,'..','src','blogsDao.js'));

var redis = require('redis');

var client = redis.createClient('http://redis-19391.c59.eu-west-1-2.ec2.cloud.redislabs.com:19391', {no_ready_check: true});

router.get('/blog/:postType/:postId',async (req,res)=>{

	let blog;

	if(client.get(originalUrl),(err,reply)=>{
		if(err || !reply)
		{
			try{
			
				blog = await BlogsDao.getBlog(req.params.postType, req.params.postId);	
			
			}
			catch(e){
			
				return res.status(500).json({error:"Unable to get the blog",message:e.message});
			
			}

			if(blog)
				return res.status(200).json(blog);
			
			else
				return res.status(404).json({error:"No such Blog found"});
		}
		else
		{
			return res.status(200).json(reply);
		}
	})
})

module.exports = router;
