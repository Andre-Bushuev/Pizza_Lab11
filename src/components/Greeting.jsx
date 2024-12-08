import React from 'react';

function Greeting({ title, img, alt, text }) {
  return (
    <div className="block1">
      <img src={img} alt={alt} className="block__icon" />
      <h3 className="info__title">{title}</h3>
      <p className="block__text">{text}</p>
    </div>
  );
}

export default Greeting;
