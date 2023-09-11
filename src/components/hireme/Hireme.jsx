import React from 'react';
import './style.css';
import { rocket } from '../assets';
import ideas from './ideas.json';
import Skills from './Skills';
import jQuery from 'jquery';
const Hireme = () => {
    const { skills } = ideas;
    const hide = () => {
        jQuery('.shortcut').fadeOut({
            duration:600,
            easing:'linear'
        });
    }
    return (
        <div className='shortcut'>
            <div className="container">
                <div className="image">
                    <img src={rocket} alt="profile" />
                </div>
                <div className="details">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2>SKILLS</h2>
                            <div className="container relative">
                                {
                                    skills?.length > 0 ? skills.map((skill,i) => <Skills skills={skill} key={i}/> ): 'Wait a little ...'
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                <button>More</button><button onClick={hide}>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default Hireme;