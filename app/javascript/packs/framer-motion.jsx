import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { motion } from "framer-motion"
import styled from "styled-components";
import ScrollMagic from "scrollmagic";
import frame from "../../assets/images/frame";

import image_1 from "../../assets/images/image_1";
import image_2 from "../../assets/images/image_2";
import image_3 from "../../assets/images/image_3";
import image_4 from "../../assets/images/image_4";

const Container = styled(motion.div)`
  position: absolute;
  z-index: -1;
`;

const Item  = styled(motion.div)`
  position: absolute;
  right: 0px;
  bottom: -22px;
`;

var section = document.getElementById("how-we-work");
var controller = new ScrollMagic.Controller();

var fourth_section = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
    }).addTo(controller);

var third_section = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
    }).addTo(controller);

var second_section = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
    }).addTo(controller);

var first_section = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
  }).setPin("#first_frame").addTo(controller);

var last_section = new ScrollMagic.Scene({
      triggerElement: "#last-step",
}).addTo(controller);

export default class MyComponent extends Component {
  constructor(){
    super();
    this.state = {
      clicked : false,
      position : 1,
      current_image: image_1
    }
  }

  componentDidMount() {
    // first_section.on
    let mediaQuery;
    if (window) {
      mediaQuery = window.matchMedia('(min-width: 1024px)')
    }
    if (mediaQuery && mediaQuery.matches) {
      second_section.on("start enter", (event) => {
        this.onScroll(0, image_2)
      })
      second_section.on("end leave", (event) => {
        this.onScroll(1, image_1);
      })

      third_section.on("start enter", (event) => {
        this.onScroll(1, image_3);
      })
      third_section.on("end leave", (event) => {
        this.onScroll(0, image_2);
      } )

      fourth_section.on("start enter", (event) => {
        this.onScroll(0, image_4);
      } )

      fourth_section.on("end leave", (event) => {
        console.log(event);
        this.onScroll(1, image_3);
        document.getElementsByClassName("image_container")[0].classList.remove("image_container_invisble");
      })

      last_section.on("change start enter", (event) => {
        document.getElementsByClassName("image_container")[0].classList.add("image_container_invisble");
      })
    }
  }

  onScroll = (set, image) => {
    this.setState({
      position : set,
      current_image: image
    })
  }

  render(){
    if (window && !(window.matchMedia('(min-width: 1024px)').matches)) return <div></div>
    return(
      <Container 
        className="image_container is-hidden-touch"
        onScroll={this.onScroll}
        animate={{
          x : this.state.position ? "0%" : "130%",
          rotateX : 10,
          scale: 1.2
        }}
        transition={{ duration: 0.4 }}
        >
        <img src={frame} />
        <Item
          animate={{
            x : this.state.position ? "-10%" : "10%"
          }}
          transition={{ type: "spring", stiffness: 500 }}
          >
          <img src={this.state.current_image} />
        </Item>
      </Container>  
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MyComponent isVisible="true" />,
    document.getElementById("first_frame").appendChild(document.createElement('div'))
  )
})
