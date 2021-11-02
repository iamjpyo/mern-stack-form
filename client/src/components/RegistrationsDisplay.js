import React,{useState, useEffect} from 'react'; 

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
            {registrations && registrations.map(registrations=>
            <div>
            <p>{registrations.name}</p>
            <p>{registrations.email}</p>
            <p>{registrations.message}</p>
            </div>
            )} 
        </div> 
    )
}