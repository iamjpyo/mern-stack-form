import React,{useState, useEffect} from 'react'; 
import "./RegistrationDisplay.css"

export const RegistrationDisplay = () => {
    const [ registrations , setRegistrations ] = useState();

    useEffect(()=>{ 
    var request = new XMLHttpRequest(); 

    request.onreadystatechange = function() { 
    if (request.readyState === 4 && request.status === 200) { 
    const response=JSON.parse(request.response) 
    setRegistrations(response) 
    } 
    }; 
    request.open('GET', 'http://localhost:5001/api/registrationsinfo', true); 
    request.send(); 
    },[]) 
    
    useEffect(()=>{ 
    console.log(registrations) 
    },[registrations]);

    return(
        <div className="RegDisplay"> 
            <h1>Collection of Messages</h1>
            {registrations && registrations.map(registrations=>
            <div className="Entries">
            <h3>{registrations.name}</h3>
            <p>{registrations.email}</p>
            <p>{registrations.message}</p>
            </div>
            )} 
        </div> 
    )
}