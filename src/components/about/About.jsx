import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work';
import CV from "./Ani Hovhannisyan CV.pdf";
import { Image } from 'antd';
import 'antd/dist/antd.css';
import 'react-vertical-timeline-component/style.min.css';
import './about.css';




const About = () => {
  return (
    <div id="about">
      <div className="container">
      <h2 className='heading'>About me</h2>
        <div className="inner">
          <div className="box">
            <Image
            width={400}
            src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.15752-9/320981533_679842163864035_8252587885612308767_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=IOThVZGJvUYAX8gOenk&_nc_ht=scontent.fevn7-1.fna&oh=03_AdRYyjrJw8-Zw7_kdLorsuiXYXkR1T2bLinKZXcMpKjp_Q&oe=65C2802B"
            />
          </div>
          <div className="box">
              <p>I am a highly motivated and aspiring Junior React JS Developer with a strong desire to further develop my skills and abilities. My ambition is to contribute to the success of a company that values career growth and fosters a dynamic work environment․</p>
              <p>I have gained practical experience by developing web applications using React.js, Vanilla JS, TypeScript, and Redux. These projects have allowed me to work with REST APIs. Notably, one of my projects, made in pure HTML/CSS, won first place in a competition held by an Armenian company.  I am currently furthering my skills by studying Next.js and TypeScript. In addition to my technical skills, I have worked with design tools such as Figma and Adobe Photoshop.  I have experience working with Git and my projects are hosted on GitHub.</p>
              {/* <p>Although my education is outside of the field of computer science, I have taken it upon myself to acquire comprehensive expertise in computer science. In my quest for knowledge, I have invested significant time in self-study, focusing extensively on data structures, algorithms, and design patterns.</p> */}
              <p>I am driven to deliver high-quality results by consistently meeting deadlines and exceeding expectations. My commitment to successfully overcome challenges has been the cornerstone of my web development journey and I am ready to continue this journey in a team that will allow me to showcase my abilities. </p> 
                <a href={CV} download>
                <button className="btn">Download CV</button>
              </a>
          </div>
        </div>
        <div className="experience">
          <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 Apr - 2021 Jun"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <p className="vertical-timeline-element-title">SENIOR SPECIALIST OF MONITORING AND INTERNAL STUDIES SERVICE</p>
            <p className="vertical-timeline-element-subtitle">Public Relations and Information Center of Staff of the Prime Minister of the Republic of Armenia</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 Oct - 2018 Apr"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <span className="vertical-timeline-element-title">Expert</span>
            <p>
            Public Relations and Information Center of Staff of the President of the Republic of Armenia
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 Apr - 2017 Sep"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <span className="vertical-timeline-element-title">Editor</span>
            <p>
            Barometer.am information-analytical electronic resource
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 Jan - 2022 Jul"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <p className="vertical-timeline-element-title">HTML/CSS, JAVASCRIPT, REACT JS</p>
            <p>
              GITC
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2011 Sep - 2013 Jun"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <p className="vertical-timeline-element-title">MASTER'S DEGREE IN WORLD HISTORY</p>
            <p>
            Yerevan State University

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2007 Sep - 2011 Jun"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <p className="vertical-timeline-element-title">BACHELOR'S DEGREE IN HISTORY</p>
            <p>
            Yerevan State University
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
     
    </div>
  )
}

export default About
