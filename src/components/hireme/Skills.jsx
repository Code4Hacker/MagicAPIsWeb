import React from 'react';

const Skills = ({ skills }) => {
    return (
        <div className="box_flex skill">
            <div className="image">
                <img src={skills.logo} alt="" />
            </div>
            <div className="level">
                <div className="det">
                <h6>{skills.name}</h6>
                <h6>{skills.level}%</h6>
                </div>
                <div className="level_bar">
                    <div className="level_tab" style={{
                        "--width": skills.level + "%"
                    }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills