import React, { useState } from 'react';
import './SectionProjects.css';
import Title from '../../atoms/text/Title';
import Subtitle from '../../atoms/text/Subtitle';

function SectionProject1(props) {
  const [text, updateTitle] = useState(props.title_0);
  const [text2, updateSubtitle] = useState(props.subtitle_0);
  const [logo, updateImage] = useState(props.image_0);

  const descriptions =
    [
      {
        title: props.title_0,
        subtitle: props.subtitle_0,
        image: props.image_0
      },
      {
        title: props.title_1,
        subtitle: props.subtitle_1,
        image: props.image_1,
        button: props.button_1
      },
      {
        title: props.title_2,
        subtitle: props.subtitle_2,
        image: props.image_2,
        button: props.button_2
      },
      {
        title: props.title_3,
        subtitle: props.subtitle_3,
        image: props.image_3,
        button: props.button_3
      },
      {
        button: props.button_4
      },
      {
        button: props.button_5
      },
      {
        button: props.button_6
      }
    ];

  const onClickButton1 = () => [
    updateTitle(descriptions[1].title),
    updateSubtitle(descriptions[1].subtitle),
    updateImage(descriptions[1].image)
    ]

  const onClickButton2 = () => [
    updateTitle(descriptions[2].title),
    updateSubtitle(descriptions[2].subtitle),
    updateImage(descriptions[2].image)
  ]

  const onClickButton3 = () => [
    updateTitle(descriptions[3].title),
    updateSubtitle(descriptions[3].subtitle),
    updateImage(descriptions[3].image)
  ]

  const onClickButton4 = () => [
    updateTitle(descriptions[0].title),
    updateSubtitle(descriptions[0].subtitle),
    updateImage(descriptions[0].image)
  ]

  const externalLink1 = () => {
    window.open('https://miguel-hh.github.io/blog-de-bolsillo/', 'self')
  }

  const externalLink2 = () => {
    window.open('https://github.com/Miguel-HH/blog-de-bolsillo/', 'self')
  }

  return (
    <div className="content-box">
      <div className="content-titles">
        <Title text={text} />
        <Subtitle text={text2} />
      </div>
      <img src={logo} alt="logo" />
      <div className="content-buttons">

        <button className="ButtonSubscription" onClick={onClickButton1}>
          {descriptions[1].button}
        </button>

        <button className="ButtonSubscription" onClick={onClickButton2}>
          {descriptions[2].button}
        </button>

        <button className="ButtonSubscription" onClick={onClickButton3}>
          {descriptions[3].button}
        </button>

        <button className="ButtonSubscription" onClick={onClickButton4}>
          {descriptions[4].button}
        </button>

        <button className="ButtonSubscription" onClick={externalLink1}>
          {descriptions[5].button}
        </button>

        <button className="ButtonSubscription" onClick={externalLink2}>
          {descriptions[6].button}
        </button>

      </div>
    </div>
  );
}

export default SectionProject1;