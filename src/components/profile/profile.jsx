import { useState, useEffect } from 'react';
import Styles from './profile.module.css';
import Logo from '../../assets/logo.png';
import AxiosConfig from '../../utils/axiosConfig';

function Profile() {
  const [profileImage, setProfileImage] = useState('');
  const [postCount, setPostCount] = useState('');
  const [episodeCount, setEpisodeCount] = useState('');
  const [rank, setRank] = useState('');
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    AxiosConfig.get('/anime/38000').then(response => {
      setProfileImage(response.data.data.images.jpg.image_url);
      setEpisodeCount(response.data.data.episodes);
      setRank(response.data.data.rank);
    }).catch(error => {
      console.log(error)
    });
  }, []);

  return (
    <div className={Styles.mainContainer}>
      <header>
        <img alt="Stellar logo" src={Logo} />
        <input type="text" placeholder="&#xf002; Search"/>
      </header>
      <div className={Styles.profileContainer}>
        <h1 className={Styles.challengeHeading}>Stellar Minore Coding Challenge</h1>
        <section className={`offset-md-2 col-md-8 mt-3 ${Styles.profile}`}>
          <div className={Styles.profileImg}>
            <img src={profileImage} className={Styles.profileImg} alt="profile" />
          </div>
          <div className={Styles.info}>
            <h2 className="mt-5 name">-</h2>
            <div className={Styles.stats}>
              <div className={Styles.statItem}>
                <span className={Styles.statData} id="post-count">{postCount}</span><span> Posts</span>
              </div>
              <div className={Styles.statItem}>
                <span className={Styles.statData} id="episode-count">{episodeCount}</span><span> Episodes</span>
              </div>
              <div className={Styles.statItem}>
                <span className={Styles.statData} id="rank">{rank}</span><span> Rank</span>
              </div>
            </div>
          </div>
        </section>
        <section className={`col-md-8 offset-md-2 ${Styles.gallery}`}>
          {pictures}
        </section>
      </div>
    </div>
  )
}

export { Profile };
