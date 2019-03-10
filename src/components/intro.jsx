import React from 'react';
import '../styles/intro.css';
import Skillw from './skillw';


class Intro extends React.Component{


render(){

const arr = this.props.data.skills.map(i => <Skillw val={i}/>);

return (
<div className='intro'>
        <div className='p-det'>
                <div><img src={this.props.data.avatar_url} alt='pp' className='pp'/></div>
                <div className='info'>
                        <div className='uname'>
                                <div className='msg'>Message</div>
                                <h1>{this.props.data.name}</h1>
                              <h4>{this.props.data.current_job_designation} at {this.props.data.current_company}</h4>
                              <h4>{this.props.data.current_location}</h4>
                        </div>
                        <div className='prof'>
                            <div className='skill'>{arr}</div>
                        </div>
                        <div className='url'>
                                <div>{this.props.data.url}</div>
                                <div><img src='./images/link.png' alt='link'/></div>
                        </div>
                </div>
        </div>
        <div className='end-sec'>
            <img src='./images/stats.png' alt='stats'  className='stats'/>
            <div className='endorse'>
                <div className='end'>Endorse +</div>
                <div className='ver'>Verify Experience</div>
           </div>
        </div>
        <div className='about-me'>{this.props.data.bio}</div>
</div>
)
}
}

export default Intro;