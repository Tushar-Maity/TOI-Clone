import React from 'react'

const EntShorts = ({ entNews }) => {
    return (
        <div className="entertainment__leftShorts">
        {entNews && entNews.slice(15, 27).map(entNew => (
            <ul key={entNew.id} className="entertainment__leftBottom--single">
                <li>
                    <a 
                        href={entNew.webUrl} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <span>{entNew.webTitle}</span>
                    </a>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default EntShorts
