import React from 'react'
import {MAP_API_KEY} from '../../utils/constants'

const GoogleMap =(props)=>{

    const {latitude,longitude} = props.data

    return(
        <>
            <iframe
                width="600"
                height="450"   
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}
                    &q=${latitude},${longitude}`}>
            </iframe>
        </>
    )
}

export default GoogleMap

