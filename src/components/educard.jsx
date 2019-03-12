import React from 'react';


const Edu = (props) => (
<div className='edu-card' style={{display: 'flex', width: '764px' , padding: '20px'  ,boxShadow: '1.5px 1.5px 0.25px #dbdbdb'
    ,borderRadius: '4px'}}>
    <div className='div-img'><img src='./images/colg.png' alt='colg' /></div>
    <div className='ed-det'>
        <h3 className='institute'>{props.val.institution_name}</h3>
        <h3 className='dep'>{props.val.department}</h3>
    </div>
</div>
)

export default Edu;