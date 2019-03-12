import React from 'react';


const Skl = (props) => (
    <div className='skillname'>
        <h1>{props.val.skill_name}</h1>
        <img src='./images/1.png' alt='1' className='level'/>
    </div>
)

export default Skl;