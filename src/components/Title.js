import React from 'react'

export default function Title({ name, title }) {
    return (
        <React.Fragment>
           <div>
                <h1 className="text-title text-center">{name} <strong className="text-blue">{title}</strong></h1>
            </div>  
        </React.Fragment>
    )
}
