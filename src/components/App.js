import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.jsx';
import Intro from './intro.jsx';
import Body from './body.jsx';

class App extends Component {
constructor(){
  super();
  this.state = {skill : null, work: null, edu: null};
}


getSkill = async () =>{
  const call = await fetch('https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills');
  const data = await call.json();
  this.setState({skill: data});
}


getWork = async () =>{
  const call = await fetch('https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience');
  const data = await call.json();
  this.setState({work: data});
}


getEd= async () =>{
  const call = await fetch('https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education');
  const data = await call.json();
  this.setState({edu: data.educationList});
}


componentDidMount(){
  this.getEd();
  this.getSkill();
  this.getWork();
}

  render() {
    return (
      <div className="App">
      <Header/>
      {this.state.skill && <div>
        <Intro data={this.state.skill}/>
       {this.state.work && this.state.edu && <Body work = {this.state.work} ed ={this.state.edu} skill={this.state.skill}/>}
      </div>}
      </div>
    );
  }
}

export default App;
