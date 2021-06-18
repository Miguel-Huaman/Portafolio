import React from 'react'
import Title from '../../atoms/text/Title'
import Subtitle from '../../atoms/text/Subtitle'
import styles from './Section.module.css'
import SvgScreens from '../../atoms/svg/SvgScreens'
import SvgGitHub from '../../atoms/svg/SvgGitHub'

function AddSvg(props) {
    switch(props.logo) {
        case 'screensAnimation':
            return <SvgScreens className={props.logo} />;
        case 'githubLogo':
            return <SvgGitHub className={props.logo} />;
        default:
        return 'Missing Image';
    }
}

function SectionIntro(props) {
    return (
        <div className={styles.textImage}>
            <Title text={props.title} />
            <Subtitle text={props.subtitle} />
            <AddSvg logo={props.logo} />
        </div>
    )
}

export default SectionIntro;