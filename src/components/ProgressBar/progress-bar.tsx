import React from 'react';
import styled from './progress-bar.module.scss';
function ProgressBar({ name, value, color, className }) {

    const progressStyled = {
        width: value * 100 + '%',
        'background-color': color,
    }

    return (
        <>
            <div className={`${styled['container']} ${className}`}>
                <div className={styled['information']}>
                    <span>{name}</span>
                    <span>{value * 100}%</span>
                </div>
                <div className={styled['bar']} >
                    <div className={styled['full']}></div>
                    <div className={styled['progress']} style={progressStyled}></div>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;