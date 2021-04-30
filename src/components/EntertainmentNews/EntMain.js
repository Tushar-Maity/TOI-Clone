import React from 'react'
import { truncate } from '../../utils'

const EntMain = ({ entNews }) => {
    return (
        <>
        {entNews && 
            <div className="entertainment__leftTop">
                <a 
                    href={entNews[0].webUrl} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <img 
                        src={entNews[0].fields.thumbnail} 
                        alt={entNews[0].webTitle}
                    />
                    <h2 className="liveNews__main-title">
                        {truncate(entNews[0].webTitle, 75)}
                    </h2>                    
                </a>
            </div>
        }
        </>
    )
}

export default EntMain
