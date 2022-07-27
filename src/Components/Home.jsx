import React from 'react'

function Home() {
  return (
    <div id="home">
      <div className='column'>
          <p id='name'>Rebekah Zhou</p>
        <p>[ri-bek-uh] <span>noun</span></p>
        <div id='home-list'>
          <span>Definition of <em>Rebekah Zhou</em></span>
          <ol>
            <li>Aspiring software engineer with experience in full stack web development.</li>
            <li>Former math teacher and lifelong math enthusiast.</li>
            <li>Board game geek, classical pianist, and boba addict.</li>
          </ol>
        </div>
      </div>
      <img src='/Rebekah.jpg' alt='Rebekah Zhou'/>
    </div>
  )
}

export default Home