import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/personal-blog.png";
import projImg2 from "../assets/img/todo.png";
import projImg3 from "../assets/img/drawing.png";
import projImg4 from "../assets/img/memory.png";
import projImg5 from "../assets/img/algor-visual.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Blog",
      description: "Explore More",
      imgUrl: projImg1,
      url: 'https://newbiecoder.netlify.app/'
    },
    {
      title: "TODO App",
      description: "Explore More",
      imgUrl: projImg2,
      url: 'https://faas-todos.netlify.app/'
    },
    {
      title: "Algorithm Visualizer",
      description: "Explore More",
      imgUrl: projImg5,
      url: 'https://visual-algor.netlify.app/'
    },
    {
      title: "Drawing Tool",
      description: "Explore More",
      imgUrl: projImg3,
      url: 'https://draw-tool.netlify.app/'
    },
    {
      title: "Memory Storage",
      description: "Explore More",
      imgUrl: projImg4,
      url: 'https://saritasa-memory.onrender.com/'
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2><br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <br />
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
