import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Post';
import styles from './BlogSection.module.css'

class BlogSection extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        let blogType = '';

        if (this.props.type === 'studentCorner') {
            blogType = 'story';
        }
        else if (this.props.type === 'currentWorld') {
            blogType = 'poem';
        }
        else {
            blogType = 'article';
        }

        axios.get('/api/blogs/' + blogType)
            .then(res => {
                console.log(res.data);
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        const posts = this.state.posts.map(post => {
            // post.date
            const date = new Date(post.date_uploaded).toDateString();
            return <Post key={post._id} id={post._id} title={post.title} author={post.author} subtitle={post.subtitle} content={post.content} date={date} image={post.location} type={post.type} />;
        })
        return (
            <div className={styles.zigzag}>
                {posts}
            </div>
        )
    }
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default BlogSection;