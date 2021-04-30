import React from 'react'

const NewsShorts = ({ liveNews }) => {
    return (
        <div className="newsShorts">
        {liveNews && liveNews.slice(20, 39).map(liveShorts => (
            <ul key={liveShorts.id} className="newsShorts__single">
                <li>
                    <a 
                        href={liveShorts.webUrl} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <span>{liveShorts.webTitle}</span>
                    </a>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default NewsShorts
