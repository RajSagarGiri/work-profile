import React from 'react';


const Experience = (props) => (
    <div className='work-card'>
        <div className='logo-s'>
            <img src={props.val.company.avatar_url} className='company-logo' alt='logo'/>
        </div>
        <div className='right-det'>
             <div className='detail-s'>
                 <h3 className='company-name'>{props.val.company.name}</h3>
                 <h5 className='designation'>{props.val.designation}</h5>
                 {props.val.location && <h5 className='location'>{props.val.location}</h5>}
                 <h5 className='duration'>{props.val.duration}</h5>
             </div>
             <div className='work-details'>
                            {props.val.description && <h5>{props.val.description.split('&')[0]}</h5>}
                            {props.val.skills_data.length>0 && <div style={{display: 'flex'}}>{props.val.skills_data.map(i => <div className='sk'>{i.skill_name}</div>)}</div>}
             </div>
        </div>
        <div className='verified'>
            <img src='./images/vp.png' alt='vp'/>
        </div>
    </div>
)

export default Experience;