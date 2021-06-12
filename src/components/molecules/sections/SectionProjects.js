import React, { useState } from 'react';
import './SectionProjects.css';
import Title from '../../atoms/text/Title';
import Subtitle from '../../atoms/text/Subtitle';

function SectionProjects(props) {
  const [text, updateTitle] = useState(props.title);
  const [text2, updateSubtitle] = useState(props.subtitle);
  const [logo, updateImage] = useState(props.image0);

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
      },
      {
        title: props.title4,
        subtitle: props.subtitle4,
        image: props.image4,
        button: props.button4,
      }
    ];

  return (
    <div className="content-box">
      <Title text={text} />
      <Subtitle text={text2} />
      <img src={logo} alt="logo" />
      <div className="content-buttons">

        <button className="ButtonSubscription" onClick={() => [
          updateTitle(descriptions[0].title),
          updateSubtitle(descriptions[0].subtitle),
          updateImage(descriptions[0].image)
          ]}>
          {descriptions[0].button}
        </button>

        <button className="ButtonSubscription" onClick={() => [
          updateTitle(descriptions[1].title),
          updateSubtitle(descriptions[1].subtitle),
          updateImage(descriptions[1].image)
          ]}>
          {descriptions[1].button}
        </button>

        <button className="ButtonSubscription" onClick={() => [
          updateTitle(descriptions[2].title),
          updateSubtitle(descriptions[2].subtitle),
          updateImage(descriptions[2].image)
          ]}>
          {descriptions[2].button}
        </button>

        <button className="ButtonSubscription" onClick={() => [
          updateTitle(descriptions[3].title),
          updateSubtitle(descriptions[3].subtitle),
          updateImage(descriptions[3].image)
          ]}>
          {descriptions[3].button}
        </button>

      </div>
    </div>
  );
}

export default SectionProjects;