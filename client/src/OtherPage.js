import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div>
      I'm on another page
      <Link to="/">&larr; Go back home</Link>
    </div>
  );
}