import React from 'react';
import '../styles/skillw.css';

const Skillw = (props)=> (
    <div className='skill-con'>
        <div className='tskill'>{props.val.skill_name}</div>
        <div className='bubble'></div>
    </div>
)

export default Skillw;