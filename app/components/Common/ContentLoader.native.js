import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import ContentLoader from 'react-native-content-loader';
import { Circle, Rect } from 'react-native-svg';
import { treelogo } from '../../assets/index';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const CompetitionLoader = () => (
  <ContentLoader
    height={HEIGHT}
    width={WIDTH}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="30" y="3" rx="10" ry="10" width="85%" height="180" />
    <Rect x="30" y="190" rx="10" ry="10" width="35%" height="20" />
    <Rect x="30" y="215" rx="10" ry="10" width="85%" height="20" />
    <Rect x="30" y="240" rx="10" ry="10" width="75%" height="20" />
    <Rect x="30" y="270" rx="10" ry="10" width="85%" height="180" />
    <Rect x="30" y="460" rx="10" ry="10" width="35%" height="20" />
    <Rect x="30" y="490" rx="10" ry="10" width="85%" height="20" />
    <Rect x="30" y="520" rx="10" ry="10" width="75%" height="20" />
  </ContentLoader>
);
const SingleCompetitionLoader = () => (
  <ContentLoader
    height={HEIGHT}
    width={WIDTH}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="30" y="14" rx="10" ry="10" width="85%" height="150" />
    <Rect x="30" y="173" rx="10" ry="10" width="85%" height="20" />
    <Rect x="30" y="240" rx="5" ry="5" width="85%" height="10" />
    <Rect x="30" y="260" rx="5" ry="5" width="85%" height="10" />
    <Rect x="30" y="280" rx="5" ry="5" width="75%" height="10" />
    <Rect x="30" y="312" rx="5" ry="5" width="25%" height="30" />
    <Circle cx="53" cy="380" r="16" />
    <Rect x="80" y="375" rx="5" ry="5" width="70%" height="10" />
    <Circle cx="53" cy="420" r="16" />
    <Rect x="80" y="415" rx="5" ry="5" width="70%" height="10" />
    <Circle cx="55" cy="460" r="16" />
    <Rect x="80" y="455" rx="5" ry="5" width="70%" height="10" />
    <Circle cx="55" cy="500" r="16" />
    <Rect x="80" y="495" rx="5" ry="5" width="70%" height="10" />
  </ContentLoader>
);
const LeaderBoardLoader = () => (
  <ContentLoader height={300} duration={1000}>
    <Rect x="0" y="30" rx="0" ry="0" width="100" height="13" />
    <Rect x="0" y="55" rx="5" ry="5" width="200" height="26" />
    <Circle cx="250" cy="60" r="30" />
  </ContentLoader>
);
const WorldLoader = () => (
  <ContentLoader
    height={HEIGHT}
    width={WIDTH}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="30" y="3" rx="10" ry="10" width="85%" height="180" />
    <Rect x="30" y="190" rx="10" ry="10" width="45%" height="20" />
    <Rect x="30" y="215" rx="10" ry="10" width="75%" height="20" />
    <Rect x="30" y="240" rx="10" ry="10" width="70%" height="20" />
    <Rect x="30" y="270" rx="10" ry="10" width="85%" height="180" />
    <Rect x="30" y="460" rx="10" ry="10" width="45%" height="20" />
    <Rect x="30" y="490" rx="10" ry="10" width="70%" height="20" />
    <Rect x="30" y="520" rx="10" ry="10" width="85%" height="20" />
  </ContentLoader>
);
const InitialContentLoader = () => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
      }}
    >
      <Image source={treelogo} style={{ height: 100, width: 100 }} />
    </View>
    <ContentLoader
      height={HEIGHT}
      width={WIDTH}
      speed={3}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <Rect x="30" y="3" rx="10" ry="10" width="85%" height="180" />
      <Rect x="30" y="190" rx="10" ry="10" width="45%" height="20" />
      <Rect x="30" y="220" rx="10" ry="10" width="75%" height="20" />
      <Rect x="30" y="250" rx="10" ry="10" width="70%" height="20" />
      <Rect x="30" y="280" rx="10" ry="10" width="85%" height="20" />
      <Rect x="30" y="310" rx="10" ry="10" width="45%" height="20" />
      <Rect x="30" y="340" rx="10" ry="10" width="70%" height="20" />
      <Rect x="30" y="370" rx="10" ry="10" width="85%" height="20" />
    </ContentLoader>
  </View>
);
const ProfileLoader = () => (
  <ContentLoader
    height={550}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="100" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="190" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="215" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="240" rx="10" ry="10" width="250" height="20" />
    <Rect x="100" y="270" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="460" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="490" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="520" rx="10" ry="10" width="250" height="20" />
  </ContentLoader>
);
const PublicProfileLoader = () => (
  <ContentLoader
    height={550}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="100" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="190" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="215" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="240" rx="10" ry="10" width="250" height="20" />
    <Rect x="100" y="270" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="460" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="490" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="520" rx="10" ry="10" width="250" height="20" />
  </ContentLoader>
);

const CompetitionListLoader = () => (
  <ContentLoader
    height={550}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="100" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="190" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="215" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="240" rx="10" ry="10" width="250" height="20" />
    <Rect x="100" y="270" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="460" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="490" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="520" rx="10" ry="10" width="250" height="20" />
  </ContentLoader>
);

const CompetitionSingleLoader = () => (
  <ContentLoader
    height={550}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="100" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="190" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="215" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="240" rx="10" ry="10" width="250" height="20" />
    <Rect x="100" y="270" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="460" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="490" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="520" rx="10" ry="10" width="250" height="20" />
  </ContentLoader>
);

const ProjectListLoader = () => (
  <ContentLoader
    height={550}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="100" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="190" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="215" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="240" rx="10" ry="10" width="250" height="20" />
    <Rect x="100" y="270" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="460" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="490" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="520" rx="10" ry="10" width="250" height="20" />
  </ContentLoader>
);

const ProjectSingleLoader = () => (
  <ContentLoader
    height={550}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="100" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="190" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="215" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="240" rx="10" ry="10" width="250" height="20" />
    <Rect x="100" y="270" rx="10" ry="10" width="300" height="180" />
    <Rect x="100" y="460" rx="10" ry="10" width="140" height="20" />
    <Rect x="100" y="490" rx="10" ry="10" width="300" height="20" />
    <Rect x="100" y="520" rx="10" ry="10" width="250" height="20" />
  </ContentLoader>
);

{
  /*
    const DefaultLoader = () => (
    <View style={[loadingIndicatorStyle, containerStyle]}>
      <Image source={loadingBar} alt={i18n.t('label.loading')} />
    </View>
  );
  */
}

const PublicTreeCounterContentLoader = () => (
  <ContentLoader
    height={HEIGHT}
    width={WIDTH}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Circle cx="15%" cy="60" r="30" />
    <Rect x="30%" y="40" rx="4" ry="4" width="60%" height="13" />
    <Rect x="30%" y="70" rx="4" ry="4" width="30%" height="13" />
    <Circle cx="50%" cy="50%" r="106" />
  </ContentLoader>
);
const PledgeEventsContentLoader = () => (
  <ContentLoader
    height={HEIGHT}
    width={WIDTH}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <View>
      <Rect x="30" y="10%" rx="5" ry="5" width="45" height="28" />
      <Rect x="30" y="17%" rx="4" ry="4" width="60%" height="12" />
      <Rect x="30" y="21%" rx="3" ry="3" width="75%" height="12" />
      <Rect x="30" y="26%" rx="3" ry="3" width="85%" height="6" />
      <Rect x="30" y="30%" rx="3" ry="3" width="85%" height="6" />
      <Rect x="30" y="34%" rx="3" ry="3" width="75%" height="6" />
      <Rect x="30" y="45%" rx="5" ry="5" width="38%" height="36" />
      <Rect x="50%" y="45%" rx="5" ry="5" width="35%" height="36" />
      <Rect x="30" y="80%" rx="5" ry="5" width="131" height="47" />
      <Rect x="50%" y="80%" rx="5" ry="5" width="131" height="47" />
      <Rect x="30" y="60%" rx="3" ry="3" width="301" height="6" />
      <Rect x="30" y="63%" rx="3" ry="3" width="301" height="6" />
      <Rect x="30" y="66%" rx="3" ry="3" width="301" height="6" />
      <Rect x="30" y="69%" rx="3" ry="3" width="301" height="6" />
    </View>
  </ContentLoader>
);
const ContentLoading = props => {
  const { screen } = props;
  console.log(screen, 'screenscreenscreenscreenscreenscreen');
  return (
    <View style={loadingIndicatorStyle}>
      {screen === 'AppHome' && <WorldLoader />}
      {screen === 'LeaderBoard' && <LeaderBoardLoader />}
      {screen === 'Competition' && <CompetitionLoader />}
      {screen === 'SingleCompetition' && <SingleCompetitionLoader />}
      {screen === 'PublicTreeCounterContentLoader' && (
        <PublicTreeCounterContentLoader />
      )}
      {screen === 'profileLoader' && <ProfileLoader />}
      {screen === 'publicProfileLoader' && <PublicProfileLoader />}
      {screen === 'competitionListLoader' && <CompetitionListLoader />}
      {screen === 'competitionSingleLoader' && <CompetitionSingleLoader />}
      {screen === 'projectListLoader' && <ProjectListLoader />}
      {screen === 'worldLoader' && <InitialContentLoader />}
      {screen === 'projectSingleLoader' && <ProjectSingleLoader />}
      {screen === 'PledgeEvents' && <PledgeEventsContentLoader />}
    </View>
  );
};
const loadingIndicatorStyle = {
  flex: 1,
  alignItems: 'center',
  marginTop: '5%'
};
{
  /*const containerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
};*/
}
export default ContentLoading;

export { WorldLoader };