import React from 'react';
import styled from './progress-bar.module.scss';


interface PBProps {
    name: string,
    value: string,
    color: string,
    className: string
};

function ProgressBar(props: PBProps) {

    const value = Number(props.value);

    const progressStyled = {
        width: value * 100 + '%',
        'backgroundColor': props.color,
    };

    return (
        <>
            <div className={`${styled.container} ${props.className}`}>
                <div className={styled.information}>
                    <span>{props.name}</span>
                    <span>{value * 100}%</span>
                </div>
                <div className={styled.bar} >
                    <div className={styled.full}></div>
                    <div className={styled.progress} style={progressStyled}></div>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;
