import React, { Component } from 'react';
import axios from 'axios';
import { Image, Container } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';
import styles from '../../public/styles/Fullpost.module.css';
import Footer from '../../components/utilities/Footer/Footer';
import Post from '../../components/Post/Post';
import { Suspense } from 'react'

export default function FullPost({post}) {
    if(!post)
      return (<div>Nothing to show</div>);
    return (
        <React.Fragment>
            <Navbar />
            <Container className={styles.container}>
                <h1 className={styles.lead}>{post.title}</h1>
                <h5 style={{ fontWeight: '400' }}>{post.subtitle}</h5>
                <p className={styles.authinfo}>{post.author}, {post.date}</p>
                <Image className={styles.fullpostimg} src={post.location} fluid />
                <div className={styles.postcontent} id="content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </Container>
            <Footer />
        </React.Fragment >
    );
}

export async function getStaticPaths() {
  const paths = [{
    params:{
      id: '5edb0d65a71b862978a29dc8'
    }
  }];
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  console.log("params id = ",params.id);
  const res = await fetch('http://localhost:3000/api/blog/'+params.id);
  const post = await res.json();
  console.log("post returned = ", post);
  return {
    props: {
      post
    }
  }
}

