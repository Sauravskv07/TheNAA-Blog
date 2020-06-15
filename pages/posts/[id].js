import React, { Component } from 'react';
import axios from 'axios';
import { Image, Container } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';
import styles from '../../public/styles/Fullpost.module.css';
import Footer from '../../components/utilities/Footer/Footer';
import Post from '../../components/Post/Post';
import BlogHelper from '../../helpers/blogs.helper'
import { Suspense } from 'react'
import useSWR from 'swr'

// function TopBlogs() {
//     const data = useSWR('/api/user', async ()=>{
//         const res = await axios('/api/topblogs');
//         return res;
//     })
    
//     const result = data.map(post => {
//         const date = new Date(post.date_uploaded).toDateString();
//         return <Post key={post._id} id={post._id} title={post.title} author={post.author} subtitle={post.subtitle} content={post.content} image={post.location} date={date} type={post.type} />;
//     });
//   return result;
// }

export default function FullPost({post}) {
    console.log('post to frontend= ',post);
    return (
        <React.Fragment>
            <Navbar />
            <Container className={styles.container}>
                <h1 className={styles.lead}>{post.title}</h1>
                <h5 style={{ fontWeight: '400' }}>{post.subtitle}</h5>
                <p className={styles.authinfo}>{post.author}, {post.date}</p>
                <Image className={styles.fullpostimg} src={post.image} fluid />
                <div className={styles.postcontent} id="content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </Container>
            <Footer />
        </React.Fragment >
    );
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  console.log("params id = ",params.id);
  const post = await BlogHelper(params.id);
  post._id = post._id.toString();
  console.log("post returned = ", post);
  return {
    props: {
      post
    }
  }
}

