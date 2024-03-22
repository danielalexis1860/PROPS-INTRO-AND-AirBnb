import React from "react"
import Contact from "./Contact"


export default function App(){
   
 // <Hero />  co,,emted it out so I dont start scrolling down  to see how much progress I'm making in the Card.js
    return(
        <div className = "contacts">  
          <Contact 
          img="./images/mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(222) 555-1234"
          email="mr.whiskaz@catnap.meow"/>

          
          <Contact 
          img="./images/fluffykins.png"
          name="Fluffykins"
          phone="(222) 555-2345"
          email="fluff@me.com"/>

          <Contact
          img="./images/felix.png"
          name="Felix"
          phone="(222) 555-4567"
          email="thecat@hotmail.com" />

          <Contact 
          img="./images/pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"/>
        </div>
    )     //I Rendered 4 instances of the cintact and put in a div with div className Contacts
} //

