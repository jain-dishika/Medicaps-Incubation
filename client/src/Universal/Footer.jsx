import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='scroll-sections footer-body'>
      <div className='insidediv'>
      {/* <img src="https://media.licdn.com/dms/image/C560BAQFVLpC7QtyrAg/company-logo_200_200/0/1676459347608?e=1688601600&v=beta&t=Uz0Rkdha0RQy2tvOpJu6S8wL0MQsG-8ivVACFbiPjbY" alt="MII Logo" width={"80%"} /> */}
      <h1 style={{fontSize:"600%"}}>MII</h1>
      <h1>Foundation</h1>
      </div>
      <div className='footer-link insidediv'>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Blogs</h2>
        <h2>Contact Us</h2>
      </div>
      <div className='footer-link  insidediv'>
        
        <p><h2>Address:</h2> et consectetur, adipisicing elit. Cum, quam? Fugit </p>
        <h2>Contact Us: 798546123</h2>
      </div>

      {/* <div style={{textAlign:"center", padding:"10px 0px",backgroundColor:"#999"}}>
        <h3>@Copyright MII Foundation</h3>
      </div> */}
      
      </div>
  )
}


// import React from 'react'
// import './Footer.css'
// const Footer = () => {
//   return (
//     <div className='scroll-sections'>
//     <footer className="footer-section">
//     <div className="container">
//       <div className="footer-cta ">
//         <div className="row">
//           <div className="column">
//             <div className="single-cta">
//               <i className="fas fa-map-marker-alt" />
//               <div className="cta-text">
//                 <h4>Find us</h4>
//                 <span>A.B. Road, Pigdamber, Rau, Indore, Madhya Pradesh 453331 · ~88.2 km</span>
//               </div>
//             </div>
//           </div>
//           <div className="column">
//             <div className="single-cta">
//               <i className="fas fa-phone" />
//               <div className="cta-text">
//                 <h4>Call us</h4>
//                 <span>+91 9876543210</span>
//               </div>
//             </div>
//           </div>
//           <div className="column">
//             <div className="single-cta">
//               <i className="far fa-envelope-open" />
//               <div className="cta-text">
//                 <h4>Mail us</h4>
//                 <span>mail@info.com</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer-content ">
//         <div className="row">
//           <div className="column">
//             <div className="footer-widget">
//               <div className="footer-logo">
//                 <a href="index.html">
//                   <img
//                     src="../public/images/Chess.png"
//                     className="img-fluid"
//                     alt="logo"
//                   />
//                 </a>
//               </div>
//               <div className="footer-text">
//                 <p>
//                   Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
//                   do eiusmod tempor incididuntut consec tetur adipisicing
//                   elit,Lorem ipsum dolor sit amet.
//                 </p>
//               </div>
//               <div className="footer-social-icon">
//                 <span>Follow us</span>
//                 <a href="#">
//                   <i className="fab fa-facebook-f facebook-bg" />
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-twitter twitter-bg" />
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-google-plus-g google-bg" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="column">
//             {/* directly on useful parts of pages */}
//             <div className="footer-widget">
//               <div className="footer-widget-heading">
//                 <h3>Useful Links</h3>
//               </div>
//               <ul>
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#">about</a>
//                 </li>
//                 <li>
//                   <a href="#">services</a>
//                 </li>
//                 <li>
//                   <a href="#">portfolio</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//                 <li>
//                   <a href="#">About us</a>
//                 </li>
//                 <li>
//                   <a href="#">Our Services</a>
//                 </li>
//                 <li>
//                   <a href="#">Expert Team</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact us</a>
//                 </li>
//                 <li>
//                   <a href="#">Latest News</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="column">
//             <div className="footer-widget">
//               <div className="footer-widget-heading">
//                 <h3>Subscribe</h3>
//               </div>
//               <div className="footer-text mb-25">
//                 <p>
//                   Don’t miss to subscribe to our new feeds, kindly fill the form
//                   below.
//                 </p>
//               </div>
//               <div className="subscribe-form">
//                 <form action="#">
//                   <input type="text" placeholder="Email Address" />
//                   <button>
//                     <i className="fab fa-telegram-plane" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="copyright-area">
//       <div className="container">
//         <div className="row">
//           <div className="column col-left">
//             <div className="copyright-text">
//               <p>
//                 Copyright © Software & Development Cell{" "}
//                 <a href="https://codepen.io/anupkumar92/">Anup</a>
//               </p>
//             </div>
//           </div>
//           <div className="column col-right">
//             {/* nav links */}
//             <div className="footer-menu">
//               <ul>
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#">About</a>
//                 </li>
//                 <li>
//                   <a href="#">Offering</a>
//                 </li>
//                 <li>
//                   <a href="#">Article</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </footer>
// </div>  
//   )
// }

// export default Footer
