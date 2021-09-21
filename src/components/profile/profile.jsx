import React from 'react';
import Styles from './profile.module.css';
import Logo from '../../assets/logo.png';
import AxiosConfig from '../../utils/axiosConfig';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileImage: '',
      postCount: '',
      episodeCount: '',
      rank: '',
      pictures: []
    };
  }

  componentDidMount() {
    AxiosConfig.get('/anime/38000').then(response => {
      this.setState({
        profileImage: response.data.image_url,
        episodeCount: response.data.episodes,
        rank: response.data.rank
      })
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className={Styles.mainContainer}>
        <header>
          <img alt="Rekd logo" src={Logo} />
          <input type="text" placeholder="&#xf002; Search"/>
        </header>
        <div className={Styles.profileContainer}>
          <h1 className={Styles.challengeHeading}>Stellar Minore Coding Challenge</h1>
          <section className={`offset-md-2 col-md-8 mt-3 ${Styles.profile}`}>
            <div className={Styles.profileImg}>
              <img src={this.state.profileImage} className={Styles.profileImg} alt="profile" />
            </div>
            <div className={Styles.info}>
              <h2 className="mt-5 name">-</h2>
              <div className={Styles.stats}>
                <div className={Styles.statItem}>
                  <span className={Styles.statData} id="post-count">{this.state.postCount}</span><span> Posts</span>
                </div>
                <div className={Styles.statItem}>
                  <span className={Styles.statData} id="episode-count">{this.state.episodeCount}</span><span> Episodes</span>
                </div>
                <div className={Styles.statItem}>
                  <span className={Styles.statData} id="rank">{this.state.rank}</span><span> Rank</span>
                </div>
              </div>
            </div>
          </section>
          <section className={`col-md-8 offset-md-2 ${Styles.gallery}`}>
            {this.state.pictures}
          </section>
        </div>
      </div>
    )
  }
}

export default Profile;
