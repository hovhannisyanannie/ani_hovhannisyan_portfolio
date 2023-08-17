import React from 'react'
import SkillBar from 'react-skillbars';
import './skills.css'

const Contact = () => {
  const skills = [
    { type: 'HTML', level: 90 },
    { type: 'CSS', level: 85 },
    {type:'SASS/SCSS', level:80},
    { type: 'Javascript', level: 60 },
    { type: 'React', level: 60 },
    { type: 'Redux Toolkit', level: 40},
    {type:"Next.js basics", level:20},
    {type:"Weback basics",level:20},
    {type: "Ant Design", level:40},
    {type: "Git/Github", level:35},
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9"
    }
  };
  return (
    <div className='skills' id="skills">  
      <div className="container">
      <h2 className='heading' >Skills</h2>
        <div className="inner">
        <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
      </div>
  )
}

export default Contact