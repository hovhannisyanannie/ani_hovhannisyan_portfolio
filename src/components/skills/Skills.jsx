import React from 'react'
import SkillBar from 'react-skillbars';
import './skills.css'

const Contact = () => {
  const skills = [
    { type: 'HTML', level: 90 },
    { type: 'CSS', level: 85 },
    {type:'SASS/SCSS', level:80},
    {type:"Tailwind CSS", level:70},
    { type: 'JavaScript', level: 70 },
    {type:"Next.js", level:50},
    { type: 'React', level: 70 },
    {type:"TypeScript", level:40},
    { type: 'Redux Toolkit', level: 40},
    {type:"MobX", level:40},
    {type:"Webpack basics",level:20},
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