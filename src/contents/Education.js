import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E Computer Engineering" where="University of Mumbai" from="July 2013" to="Present"/>
            
            <Widecard title="HSC" where="ICLES' College Vashi" from="2011" to="2013"/>

            <Widecard title="SSC" where="Pt. Motilal Nehru High School" from="2001" to="2011"/>
            </div>
            )
        }
    }
    
export default Education
    