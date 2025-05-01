import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'

const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);
    const fetchVideoData = async () =>{
        //Fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
    }

    useEffect(() => {
        fetchVideoData();
    },[])

  return (
    <div className='play-video'>
       
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
        <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt='' /> 125 </span>
                <span><img src={dislike} alt='' /> 3 </span>
                <span><img src={share} alt='' /> Share </span>
                <span><img src={save} alt='' /> Save </span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt=''/>
            <div>
                <p>Adi Narayana</p>
                <span>700k Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Test channel for development</p>
            <p>Subscribe for more</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Geetha Akula <span> 3 Day ago</span></h3>
                    <p>This looks very good Adi, nice job keep it up</p>
                    <div className="comment-action">
                        <img src={like} alt=""/>
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Geetha Akula <span> 1 Day ago</span></h3>
                    <p>This looks very good Adi, nice job keep it up</p>
                    <div className="comment-action">
                        <img src={like} alt=""/>
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Geetha Akula <span> 1 Day ago</span></h3>
                    <p>This looks very good Adi, nice job keep it up</p>
                    <div className="comment-action">
                        <img src={like} alt=""/>
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Geetha Akula <span> 1 Day ago</span></h3>
                    <p>This looks very good Adi, nice job keep it up</p>
                    <div className="comment-action">
                        <img src={like} alt=""/>
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo