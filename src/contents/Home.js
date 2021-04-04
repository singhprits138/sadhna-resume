import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/pri1.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Sadhna Singh','I am a Software developer']} speed={200} eraseDelay={500}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    