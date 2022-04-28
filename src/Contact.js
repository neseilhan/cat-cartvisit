import React from "react"

export default function Contact({image,name,phone,email}) { //props yazıp props.name
    //olarak da kullanılabilir
    return (
        <div className="contact-card">
            <img src={image}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}