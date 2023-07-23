// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">An Ambitious Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/myFace.jpeg'} alt="Ana Grisham"/>
      <p className="content is-italic mt-4">
        Hi, I'm Ana! A wife and dog mom of two, studying full stack web development to better myself and kickstart my career in technology.
      </p>
      <p className="content">
        FINISH ME
      </p>
    </div>
  );
}

export default About;