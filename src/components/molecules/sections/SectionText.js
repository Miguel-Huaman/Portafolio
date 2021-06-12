import React, { useState } from 'react';
import './SectionText.css';
import Title from '../../atoms/text/Title';
import Subtitle from '../../atoms/text/Subtitle';

const feature1 = {
  title: "Título 01",
  subtitle: "subtitulo 01",
  button: "boton 1A",
};

const feature2 = {
  title: "Título 02",
  subtitle: "subtitulo 02",
  button: "boton 2A",
};

const feature3 = {
  title: "Título 03",
  subtitle: "subtitulo 03",
  button: "boton 3A",
};

function SectionText() {
  const [text, setText] = useState("cero");
  const [text2, setText2] = useState("cero");
  return (
    <div className="content-box">
      <Title text={text} />
      <Subtitle text={text2} />
      <div className="content-buttons">

        <button onClick={() => [
          setText(feature1.title),
          setText2(feature1.subtitle)
        ]}>
          {feature1.button}
        </button>

        <button onClick={() => [
          setText(feature2.title),
          setText2(feature2.subtitle)
        ]}>
          {feature2.button}
        </button>

        <button onClick={() => [
          setText(feature3.title),
          setText2(feature3.subtitle)
        ]}>
          {feature3.button}
        </button>

      </div>
    </div>
  );
}

export default SectionText;