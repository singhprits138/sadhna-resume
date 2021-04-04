import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'skills':['HTML','CSS','JS','PHP','MYSQL','Webservices','REACT JS','MongoDB','Node','Express','Linux']
        };
    }

    render() {
        return (
            <div className="condiv skills">
             <h1 className="subtopic">My Skills</h1>
                <ul>
                {this.state.skills.map((value)=>{
                    return <li>{value}</li>
                })}
                </ul>
            </div>
            )
        }
    }
    
    export default Skills
    