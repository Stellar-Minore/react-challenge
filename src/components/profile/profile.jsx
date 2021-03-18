import React from 'react';
import Styles from './profile.module.css';
import Logo from '../../assets/logo.png';
import AxiosConfig from '../../utils/axiosConfig';
import GalleryItem from '../galleryItem';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      profileImage: '',
      postCount: '',
      followerCount: '',
      followingCount: '',
      detailList: [],
      pictures: []
    };
  }

  componentDidMount() {
    AxiosConfig.get('/character/246').then(response => {
      console.log(response);

      var bioArray = response.data.about.split('\n');
      var detailList = []

      for (let i = 0; i < 6; i++) {
        detailList.push(<li key={i}>{bioArray[i].substring(0, bioArray[i].length - 3)}</li>);
      }

      this.setState({
        name: response.data.name,
        profileImage: response.data.image_url,
        followerCount: response.data.animeography.length,
        followingCount: response.data.mangaography.length,
        detailList: detailList
      })
    }).catch(error => {
      console.log(error)
    });

    AxiosConfig.get('/character/246/pictures').then(response => {
      this.setState({
        pictures: response.data.pictures.map((picture, index) => {
          return (<GalleryItem image={picture.large} />)
        }),
        postCount: response.data.pictures.length
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
          <br />
          <br />
          <section className={`offset-md-2 col-md-8 mt-3 ${Styles.profile}`}>
            <div className={Styles.profileImg}>
              <img src={this.state.profileImage} className={Styles.profileImg} alt="profile" />
            </div>
            <div className={Styles.info}>
              <h2 className="mt-5">{this.state.name}</h2>
              <div className={Styles.stats}>
                <div className={Styles.statItem}>
                  <span className={Styles.statData} id="post-count">{this.state.postCount}</span><span> posts</span>
                </div>
                <div className={Styles.statItem}>
                  <span className={Styles.statData} id="follower-count">{this.state.followerCount}</span><span> followers</span>
                </div>
                <div className={Styles.statItem}>
                  <span className={Styles.statData} id="following-count">{this.state.followingCount}</span><span> following</span>
                </div>
              </div>
              <br />
              <div id="bio">
                <ul id="detail-list">
                	{this.state.detailList}
                </ul>
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
