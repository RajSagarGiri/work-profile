import React from 'react';
import '../styles/body.css';
import Experience from './workcard.jsx';
import Edu from './educard.jsx';
import Skl from './skillcard.jsx';


class Body extends React.Component{

    render(){

        const arr = this.props.work.work_experiences.map( i=> <Experience val ={i}/>);

        const ark = this.props.ed.map( i=> <Edu val ={i}/>);

        const acc = this.props.skill.skills.map( i=> <Skl val ={i}/>)



        return(
        <div className='work-skill'>
            <div className='work-edu'>
                  <h3>Work Experience</h3>
                <div className='work'>{arr}</div>
                <div className='edu'>
                  <h3>Education</h3>
                     {ark}
               </div>
            </div>
            <div className='w-skill'>
                <h3>Skills</h3>
                <div></div>
                {acc}
            </div>
        </div>
        )
    }
}

export default Body;