import React, { Component } from 'react';
import Post from './Post';

function Home(props) {
  const { postList } = props;
  return (
    <div className="Home">
    {
      postList.map(post =>
        <Post
          author={post.author}
          title={post.title}
          description={post.description}
          tag={post.tag}
          imgSrc={post.imgSrc}
        />
      )
    }
    </div>
  );
}

export default Home;
