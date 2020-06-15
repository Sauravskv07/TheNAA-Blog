'use strict';

const path = require('path');

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const next = require('next');
require('dotenv').config();

let BlogsDao = require(path.join(__dirname,'src','blogsDao.js'));
let AuthorDao = require(path.join(__dirname,'src','authorDao.js'));

const port = process.env.PORT || 3000;
    
const dev = process.env.NODE_ENV !== 'production'

let app;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler()

//console.log('redis url = ',process.env.REDISCLOUD_URL);

app.prepare()
.then(() => {
  let server = express();
  
  MongoClient.connect(

    process.env.NAA_DB_URI,

    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .catch(err => {
      
      console.error(err.stack)
      
      process.exit(1)
    })
    .then(async client => {
      
      await BlogsDao.injectDB(client);

      await AuthorDao.injectDB(client);
      
      server.use(helmet());

      server.use(cors());
      
      server.use(logger('combined'));
      
      server.set('trust proxy', 1) // trust first proxy to enable react app

      server.use(session({
          secret: process.env.SESSION_SECRET,
          resave: false,
          saveUninitialized: true,
      }))

      server.use('/api',require(path.join(__dirname,'api','addBlog.js')));

      server.use('/api',require(path.join(__dirname,'api','getBlog.js')));

      server.use('/api',require(path.join(__dirname,'api','getBlogs.js')));

      server.use('/api',require(path.join(__dirname,'api','getTopBlogs.js')));

      server.use('/api',require(path.join(__dirname,'api','addAuthor.js')));

      server.use('/api',require(path.join(__dirname,'api','login.js')));

      server.use(express.static(path.join(__dirname,'public')));

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(port, () => {
          console.log(`listening on port ${port}`)
        })
    
    })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

