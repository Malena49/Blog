import React from 'react';

import './styles.scss';

const Post = ({id, category, title, excerpt, mode}) =>{
  
  return(
  <article className="post" id={mode? "":"zen"}>
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p  className="post-excerpt" >{excerpt}</p>
  </article>
)};

export default Post;
