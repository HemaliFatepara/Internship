import React from 'react'

function Toolbar ({onPlayMovie , onUploadImage}) {
    return (
        <div>
            <Button onClick={onPlayMovie}>Play Movie</Button>
            <Button onClick={onUploadImage}>Upload Image</Button>
        </div>
    )
}

function Button ({onClick , children}){
    return(
        <button onClick={onClick}>
        {children}
        </button>
    )

}

const Alert = () => {
  return (
    <div>
        <Toolbar
            onPlayMovie= {() => alert("Playing!")}
            onUploadImage={() => alert("Uploading!")}
        
         />
    </div>
  )
}

export default Alert
