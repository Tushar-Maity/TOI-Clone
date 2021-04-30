
const LiveMain = ({ liveNews }) => {

    return (
        <div>
        {liveNews &&
            <div className="liveNews__main">
                <a href={liveNews[0].webUrl} target="_blank" rel="noreferrer">
                    <img 
                        src={liveNews[0].fields.thumbnail} 
                        alt={liveNews[0].webTitle}
                    />
                    <h2 className="liveNews__main-title">
                        {liveNews[0].webTitle}
                    </h2>                    
                </a>
            </div>
        }
        </div>
    )
}

export default LiveMain
