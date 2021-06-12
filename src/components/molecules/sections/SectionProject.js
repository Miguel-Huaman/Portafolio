import React from 'react';
import Title from '../../atoms/text/Title';
import Subtitle from '../../atoms/text/Subtitle';

const post1 = [
    "Título 01",
    "subtitulo 01"
];

const post2 = [
    "Título 02",
    "subtitulo 02"
];

const update1 = () => (
    <Title text={post2[0]} />
)

function SectionProject(props) {
    return (
        <div>
            <Title text={post1[0]} />
            <Subtitle text={post2[1]} />
            <img src={props.logo} alt="logoTI" />
            <button onClick={update1}>b1</button>
            <button>b2</button>
        </div>
    )
}

export default SectionProject