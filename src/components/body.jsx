import React from 'react';
import '../styles/body.css';
import Experience from './workcard.jsx';

class Body extends React.Component{

    render(){

        const arr = this.props.work.work_experiences.map( i=> <Experience val ={i}/>)

        return(
        <div className='work-skill'>
            <div className='work-edu'>
                <div className='work'>{arr}</div>
                <div className='edu'>Sch1</div>
            </div>
            <div className='w-skill'>mySkill</div>
        </div>
        )
    }
}

export default Body;