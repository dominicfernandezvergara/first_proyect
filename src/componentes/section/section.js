import React from 'react';
import './section.scss';
import SectionContainerButton from '../section/sectionContainerButton/section-container-button'

function Section() {
  const height = '50';
  const width = '50';
  const height2 = '50';
  const width2 = '70';
  const url = 'https://st4.depositphotos.com/4177785/22209/v/1600/depositphotos_222098434-stock-illustration-man-training-barbell-glyph-icon.jpg';
  const url2 = 'https://cdn4.iconfinder.com/data/icons/exercise-workout-with-a-partner/263/exercise-partner-teammate-training-workout-001-512.png';
  const text = 'Arms';
  const text2 = 'Legs';
  const text3 = 'Rear';
  const text4 = 'Back';

  return (
    <div className="section">
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text3}
        url2={url2}
        text2={text4}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
      <SectionContainerButton
        height={height}
        width={width}
        height2={height2}
        width2={width2}
        url={url}
        text={text}
        url2={url2}
        text2={text2}
      />
    </div>
  );
}

export default Section;
