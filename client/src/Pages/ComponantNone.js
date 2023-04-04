import React from "react";
import './Componants.css';
import './ComponantNone.css';
function ComponantNone(){
    return(
        <div className="componantNone">
            <div className="background">
            {/* <div className="componantD">
            Componant-D
        </div> */}
         <div className="containerfor">
             <div className="screen">
                 <div className="screen-header">
                     <div className="screen-header-left">
                         <div className="screen-header-button close"></div>
                         <div className="screen-header-button maximize"></div>
                         <div className="screen-header-button minimize"></div>
                     </div>
                     <div className="screen-header-right">
                         <div className="screen-header-ellipsis"></div>
                         <div className="screen-header-ellipsis"></div>
                         <div className="screen-header-ellipsis"></div>
                     </div>
                 </div>
                 <div className="screen-body">
                     <div className="screen-body-item left">
                         <div className="app-title">
                             <span>CONTACT-US</span>
                             {/* <span>US</span> */}
                         </div>
                         <div className="app-contact">CONTACT INFO : +XX XXXX XXXX </div>
                     </div>
                     <div className="screen-body-item">
                         <div className="app-form">
                             <div className="app-form-group">
                                 <input className="app-form-control" placeholder="NAME"/>
                             </div>
                             <div className="app-form-group">
                                 <input className="app-form-control" placeholder="EMAIL"/>
                             </div>
                             <div className="app-form-group">
                                 <input className="app-form-control" placeholder="CONTACT NO"/>
                             </div>
                             <div className="app-form-group message">
                                 <input className="app-form-control" placeholder="MESSAGE"/>
                             </div>
                             <div className="app-form-group buttons">
                                 <button className="app-form-button">CANCEL</button>
                                 <button className="app-form-button" onClick="sendDetails()">SEND</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             
         </div>
     </div>
        </div>
    );
}
export default ComponantNone;