import React from "react"
import Contact from "./Contact"


function App() {
    return (
        <div className="contacts">
            <Contact
                image="./images/mr-whiskerson.jpg"
                phone="(212) 555-1234"
                name ="Mr. Whiskerson"
                email = "mr.whiskaz@catnap.meow"    
            />
            <Contact
              image="./images/fluffy-kins.jpg"
              phone="(212) 555-2345"
              name ="Fluffykins"
              email = "fluff@me.com" 
               />
            <Contact 
              image="./images/felix.jpg"
              phone="(212) 555-4567"
              name ="Felix"
              email = "thecat@hotmail.com" 
            />
            <Contact 
              image="./images/pumpkin.jpg"
              phone="(0800) CAT KING"
              name ="Pumpkin"
              email = "pumpkin@scrimba.com" 
              />
        </div>
    )
}

export default App