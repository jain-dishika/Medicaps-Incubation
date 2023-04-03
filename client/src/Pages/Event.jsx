import React from 'react'
import './Event.css'


const Event = () => {
  return (
    <div className='event scroll-sections' style={{paddingTop:"20vh"}}>
      <h1 style={{textAlign:"center", margin:"20px",fontSize:"60px"}}>Upcomming Events</h1>
    <div className='wrapper'>
        <Card img="/images/event1.png"
            title="Event One"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vel excepturi mollitia molestiae aliquam officiis eligendi...."
        />
        <Card img="/images/event2.png"
            title="Event Two"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vel excepturi mollitia molestiae aliquam officiis eligendi...."
        />
        <Card  img="/images/event3.png"
            title="Event Three"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vel excepturi mollitia molestiae aliquam officiis eligendi...."
        />
    </div>
    </div>
  )
}


function Card(props) {
    return (
      <div className="card"> 
       <div className='card_body'>
          <img src={props.img} alt="image" />
          <h2 className='card_title'> {props.title}</h2>
          <p className='card_description'> {props.description}</p>  
       </div>
       <button className='card_btn'>Read More</button>
      </div> 
    )
}


export default Event;
