import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LiveMain from '../components/LiveNews/LiveMain'
import LiveOthers from '../components/LiveNews/LiveOthers'
import NewsShorts from '../components/LiveNews/NewsShorts'
import NewsVideos from '../components/LiveNews/NewsVideos'

const baseURL = 'https://content.guardianapis.com'
const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`

const LiveNews = () => {
    const [liveNews, setLiveNews] = useState()

    const fetchLiveNews = async() => {
        const dataLiveOthers = await axios.get(`${baseURL}/search?q=india&page-size=40&show-fields=thumbnail&${apiKey}`)

        // console.log(dataLiveOthers.data.response.results);
        
        setLiveNews(dataLiveOthers.data.response.results)
    }

    useEffect(() => {
        fetchLiveNews()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="liveNews">
            <div className="liveNews__left">
                <LiveMain liveNews={liveNews} />
                <LiveOthers liveNews={liveNews} />
            </div>

            <div className="liveNews__center">
                <NewsVideos liveNews={liveNews} />
            </div>
            <div className="liveNews__right">
                <NewsShorts liveNews={liveNews} />
            </div>
        </div>
    )
}

export default LiveNews
