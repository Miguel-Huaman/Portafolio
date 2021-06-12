import React, { useState } from 'react';
import './SectionProjects.css';
import Title from '../../atoms/text/Title';
import Subtitle from '../../atoms/text/Subtitle';

function SectionProject2(props) {
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
      },
      {
        title: props.title5,
        subtitle: props.subtitle5,
        image: props.image5,
        button: props.button5,
      },
      {
        title: props.title6,
        subtitle: props.subtitle6,
        image: props.image6,
        button: props.button6,
      }
    ];

  const handleClick = () => {
    window.scrollTo(0,0);
  }

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
    updateTitle(descriptions[4].title),
    updateSubtitle(descriptions[4].subtitle),
    updateImage(descriptions[4].image)
  ]

  const onClickButton5 = () => [
    updateTitle(descriptions[5].title),
    updateSubtitle(descriptions[5].subtitle),
    updateImage(descriptions[5].image)
  ]

  return (
    <div className="content-box">
      <Title text={text} />
      <Subtitle text={text2} />
      <img src={logo} alt="logo" />
      <div className="content-buttons">

        <button className="ButtonSubscription" onClick={handleClick}>
          {descriptions[0].button}
        </button>

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

        <button className="ButtonSubscription" onClick={onClickButton5}>
          {descriptions[5].button}
        </button>

      </div>
    </div>
  );
}

export default SectionProject2;