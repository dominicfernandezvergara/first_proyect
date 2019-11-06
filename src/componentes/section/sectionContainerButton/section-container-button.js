import React from 'react';
import './section-container-button.scss';

function SectionContainerButton(props) {
  const height = props.height;
  const width = props.width;
  const height2 = props.height2;
  const width2 = props.width2;
  const url = props.url;
  const text = props.text;
  const text2 = props.text2;
  const url2 = props.url2;

  return (
    <div className="section_container-button">
      <button type="button" className="section-button">
        <img
          src={url}
          alt="men"
          height={height}
          width={width}
        />
        <span>
          {text}
        </span>
      </button>
      <button type="button" className="section-button">
        <img
          src={url2}
          alt="men"
          height={height2}
          width={width2}
        />
        <span>
          {text2}
        </span>
      </button>
    </div>
  );
}

export default SectionContainerButton;
