import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
       
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
        <h3>Test video to check for optimization</h3>
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