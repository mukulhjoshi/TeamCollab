import React, { Component } from 'react';

function Content(props) {
  const { title, description } = props;
  return (
    <div className="Content">
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
}

export default Content;
