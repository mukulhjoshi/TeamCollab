import React, { Component } from 'react';
import Content from './Content';
import Footer from './Footer';

function Post(props) {
  const { imgSrc, title, author, description, tag } = props;
  return (
    <div className="Post">
      <img src="./1.png" alt="img" />
      <Content 
        title={title}
        description={description}
      />
      <Footer
        author={author}
        tag={tag}
      />
    </div>
  );
}

export default Post;
