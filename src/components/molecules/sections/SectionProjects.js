import React, { useState } from 'react';
import './SectionProjects.css';
import Title from '../../atoms/text/Title';
import Subtitle from '../../atoms/text/Subtitle';

function SectionProjects(props) {
  const [text, setText] = useState(props.title);
  const [text2, setText2] = useState(props.subtitle);

  const descriptions =
    [
      {
        title: props.title1,
        subtitle: props.subtitle1,
        image: props.image1,
        button: props.button1,
      },
      {
        title: props.title2,
        subtitle: props.subtitle2,
        image: props.image2,
        button: props.button2,
      },
      {
        title: props.title3,
        subtitle: props.subtitle3,
        image: props.image3,
        button: props.button3,
      }
    ];

  return (
    <div className="content-box">
      <Title text={text} />
      <Subtitle text={text2} />
      <img src={props.logo} alt="logo" />
      <div className="content-buttons">

        <button onClick={() => [
          setText(descriptions[0].title),
          setText2(descriptions[0].subtitle)
          ]}>
          {descriptions[0].button}
        </button>

        <button onClick={() => [
          setText(descriptions[1].title),
          setText2(descriptions[1].subtitle)
          ]}>
          {descriptions[1].button}
        </button>

        <button onClick={() => [
          setText(descriptions[2].title),
          setText2(descriptions[2].subtitle)
          ]}>
          {descriptions[2].button}
        </button>

      </div>
    </div>
  );
}

export default SectionProjects;