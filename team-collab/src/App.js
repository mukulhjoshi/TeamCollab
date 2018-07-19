import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import logo from './logo.svg';

const postList = [
  {
    imgSrc: '1.png',
    title: 'title',
    description: 'description',
    author: 'author',
    tag: 'tag',
  },
  {
    imgSrc: '1.png',
    title: 'title',
    description: 'description',
    author: 'author',
    tag: 'tag',
  },
  {
    imgSrc: '1.png',
    title: 'title',
    description: 'description',
    author: 'author',
    tag: 'tag',
  }
];

class App extends Component {
  render() {
    return (
      <div className = "App" >
        <Header />
        <Home postList={postList} />
      </div>
    );
  }
}

export default App;
