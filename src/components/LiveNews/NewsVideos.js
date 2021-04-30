import { truncate } from "../../utils";

const NewsVideos = ({ liveNews }) => {
    return (
        <div className="newsVideos">
        {liveNews && liveNews.slice(14, 19).map(newsVideo => (
            <a
                key={newsVideo.id}
                href={newsVideo.webUrl} 
                target="_blank" 
                rel="noreferrer"
            >
                <div className="newsVideos__single">
                    <div className="newsVideos__img">
                        <img 
                            src={newsVideo.fields.thumbnail} 
                            alt={newsVideo.webTitle}
                        />
                    </div>
                    <p>{truncate(newsVideo.webTitle, 60)}</p>
                </div>
            </a>
        ))

        }
        </div>
    )
}

export default NewsVideos
