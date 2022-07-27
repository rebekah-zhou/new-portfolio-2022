import React from 'react'

function About() {
  return (
    <div id='about'>
        <h1>Why You Should Hire Me</h1>

        <div id="about-p-container">
            <div className="about-p">
                <h2>I learn quickly.</h2>
                <p>During my time with Flatiron School, I went through cycles of learning a new programming language/technology within two weeks, being tested on it, and creating a web app using it.</p>
            </div>
            <div className="about-p">
                <h2>I've done this before.</h2>
                <p>When I became a public high school teacher, I didn't have the same background as my fellow teachers - no teaching credential, no student teacher experience.
                    Despite this non-traditional background, I succeeded in the classroom. While attending graduate school to attain my teaching credential, I developed relationships with my students,
                    generated my own exams, and collaborated with my math team to push student outcomes. </p>
                <p>
                    As a result, my students achieved growth in state testing, and I was selected to attend a new teacher conference due to my leadership and initiative. 
                    You can count on me to bring the same energy and perseverence to continue my journey of learning and growing as a software engineer.</p>
            </div>
            <div className="about-p">
                <h2>I live for the challenge.</h2>
                <p>Exploring the unknown and discovering outside of the box solutions bring me joy. The truth is - I don't just "get by" when things get rough, I <em>thrive</em>. </p>
            </div>
        </div>
    </div>
  )
}

export default About