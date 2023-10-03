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
            src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.15752-9/315353244_1202417083676027_7137588559994931944_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1i6XIeprxasAX8NCxKq&_nc_ht=scontent.fevn7-1.fna&oh=03_AdQ2spZn4SzZJmqRsh-vc4RtTTIZRwCRgT3qMYjYthBn5Q&oe=6543B31A"
            />
          </div>
          <div className="box">
              <p>I'm a junior Front End developer, looking for an internship to develop my skills and abilities, as well as make a small contribution to the company's activities, which will give me the opportunity to demonstrate my abilities.</p>
              <p>In order to have a little experience before applying for an internship, I've made some web apps using mostly React.js, but also Vanilla JS and Redux. I've worked with REST APIs, familiar with basic Design Patterns. I also paid attention to the use of HTML and CSS features. One of the projects, made exclusively with HTML/CSS, won first place in the company. I've worked both Figma and Adobe Photoshop.</p>
              <p>My previous work experience helped me to understand the importance of teamwork, but I would like to point out that I can also work alone. I've worked alone the entire time I've been developing web apps and I tried to find the solution myself whenever I encountered any problem.</p> 
              <p>I am hardworking and responsible, I do everything possible to complete the work on time and with quality. I am also ready to work extra hours if there is a need for it.</p>
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
