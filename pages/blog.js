import React from 'react';
// import styles from './Blog.module.css';
import Navbar from '../components/utilities/Navbar/Navbar';
import { Tabs, Tab } from 'react-bootstrap';
import BlogSection from '../components/Post/BlogSection';
import Footer from '../components/utilities/Footer/Footer';

const Blog = () => {

    const stylesTab = {
        margin: '0',
        padding: '10px'
    }

    const blockdiv = {
        display: 'flex',
        flexDirection: 'row'
    }

    return (
        <div>
            <Navbar />
            <Tabs defaultActiveKey="studentCorner" id="uncontrolled-tab-example">
                <Tab eventKey="studentCorner" title="Student Corner" style={stylesTab}>
                    {/* <div className="text-center">
                        <h2>This is nice</h2>
                    </div> */}
                    <div style={blockdiv}>
                        <BlogSection type="studentCorner" />
                    </div>
                </Tab>
                <Tab eventKey="articles" title="Articles" style={stylesTab}>
                    {/* <div className="text-center">
                        <h2>This is not nice</h2>
                    </div> */}
                    <div style={blockdiv}>
                        <BlogSection type="article" />
                    </div>
                </Tab>
                <Tab eventKey="currentWorld" title="Current World" style={stylesTab}>
                    {/* <div className="text-center">
                        <h2>This is very nice</h2>
                    </div> */}
                    <div style={blockdiv}>
                        <BlogSection type="currentWorld" />
                    </div>
                </Tab>
            </Tabs>
            <Footer />
        </div>
    )
}


export default Blog;