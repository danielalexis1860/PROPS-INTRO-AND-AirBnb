import React from "react"

export default function Contact(whatever) {
    console.log(whatever)
    return(
        <div className="contact-card">  
            <img src = "./images/mr-whiskerson.png"/>
            <h3>{props.name}</h3>

            <div className="info-group">
                <img src = "./images/phone-icon.png"/>
                <p>{props.phone}</p>
            </div> 
            

            <div className="info-group">
                <img src = "./images/mail-icon.png"/>
                <p>{props.email}</p>
            </div>  
            

        </div>  // End of div className contact-card 
    )   
}   // there are changes such as names on all 4 Mr. Whiskerson  Fluffykins  Felix  Pumpkin 
//These are where the names are supposed to be so it's not Mr Whiskerson showing on all 4 where the names
// will be. Also the properties will change too such as phone number and email as regards to each person. 