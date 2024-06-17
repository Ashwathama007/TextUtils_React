import React from 'react'

export default function Alert(props) {
    const capatilize=(word)=>{
        const v= word.toLowerCase();
        return v.charAt(0).toUpperCase() + v.slice(1);

    }
    

  return (
    
    
     
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}
  </div>


        
    
  )
}

