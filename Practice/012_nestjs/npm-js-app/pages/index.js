import Layout from '../components/Layout/index';
import fetch from 'isomorphic-unfetch';
import Post from '../components/Posts/Post';
import React from 'react';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3001/posts');
    const posts = await res.json();
    console.log(posts);
    return { posts };
  }
  render() {
    const { posts } = this.props;
    return (
      <Layout>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </Layout>
    );
  }
}
export default Index;
