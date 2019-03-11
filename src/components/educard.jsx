import React from 'react';


const Edu = (props) => (
<div className='edu-card' style={{display: 'flex', width: '764px' , padding: '20px'}}>
    <div className='div-img'><img src='./images/colg.png' alt='colg' /></div>
    <div className='ed-det'>
        <h3>{props.val.institution_name}</h3>
        <h3>{props.val.department}</h3>
    </div>
</div>
)

export default Edu;