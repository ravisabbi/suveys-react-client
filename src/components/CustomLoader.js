import React from 'react'
import Loader from 'react-loader-spinner'

function CustomLoader() {
  return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"}}>

        
        <Loader type="TailSpin" color={"#007AFD"} height={40} width={40}/>
        </div>
  )
}

export default CustomLoader