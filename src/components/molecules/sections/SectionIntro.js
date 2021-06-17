import React from 'react'
import Title from '../../atoms/text/Title'
import Subtitle from '../../atoms/text/Subtitle'
import styles from './Section.module.css'

const SVG1 = () => {
    return (
        <svg viewBox="0 0 1280 720" style={{ fill: 'none', stroke: 'none' }}>
            <rect id="tv" x="258.5" y="83.5" fill="#121212" stroke="#121212" stroke-width="19" stroke-miterlimit="10" width="827" height="417" />
            <path id="tablet" fill="#121212" stroke="#121212" stroke-width="19" stroke-miterlimit="10" d="M480.5,449.75
                    c0-6.225-3.873-10.25-9.907-10.25H208.407c-6.034,0-11.907,4.025-11.907,10.25v162.5c0,6.225,5.873,12.25,11.907,12.25h262.187
                    c6.034,0,9.907-6.025,9.907-12.25V449.75z"/>
            <path id="laptop1" fill="#121212" stroke="#121212" stroke-width="19" stroke-miterlimit="10" d="M1031.247,560.769
                    c0,6.897-2.662,15.439-9.709,15.439H651.481c-7.047,0-15.226-8.542-15.226-15.439V358.846c0-6.898,8.179-9.922,15.226-9.922h370.057
                    c7.047,0,9.709,3.023,9.709,9.922V560.769z"/>
            <path id="laptop2" fill="#121212" d="M1082,575.656c0-7.312-6.049-13.239-13.511-13.239H599.013c-7.461,0-13.51,5.928-13.51,13.239
                    v1.104c0,7.313,6.049,13.24,13.51,13.24h469.477c7.462,0,13.511-5.928,13.511-13.24V575.656z"/>
            <path id="celular" fill="#121212" stroke="#121212" stroke-width="19" stroke-miterlimit="10" d="M833.5,476.131
                    c0-7.497-6.206-13.631-13.378-13.631h-69.26c-7.172,0-13.362,6.134-13.362,13.631v144.804c0,7.497,6.19,13.565,13.362,13.565h69.26
                    c7.172,0,13.378-6.068,13.378-13.565V476.131z"/>
        </svg>
    )
};

function SectionIntro(props) {
    return (
        <div className={styles.textImage}>
            <Title text={props.title} />
            <Subtitle text={props.subtitle} />
            <SVG1 />
        </div>
    )
}

export default SectionIntro;