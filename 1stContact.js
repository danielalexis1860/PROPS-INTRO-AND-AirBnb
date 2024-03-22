import React from "react"

export default function Contact(whatever) {
    console.log(whatever)
    return(
        <div className="contact-card">  
            <img src = "./images/mr-whiskerson.png"/>
            <h3>Mr. Whiskerson</h3>

            <div className="info-group">
                <img src = "./images/phone-icon.png"/>
                <p>(222) 555-1234</p>
            </div> 
            

            <div className="info-group">
                <img src = "./images/mail-icon.png"/>
                <p>mr.whiskaz@catnap.meow</p>
            </div>  
            

        </div>  // End of div className contact-card 
    )  
}   // now console log. for line 3 and line 4 hit save and refresh,