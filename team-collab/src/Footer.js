import React, { Component } from 'react';

function Footer(props) {
  const { author, tag } = props;
  return (
    <div className="Footer">
      <span>{author}</span>
      <span>{tag}</span>
    </div>
  );
}

export default Footer;
