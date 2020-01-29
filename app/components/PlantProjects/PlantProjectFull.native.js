import React from 'react';
import PropTypes from 'prop-types';

import i18n from '../../locales/i18n';
import { loadProject } from '../../actions/loadTposAction';
import { queryParamsToObject } from '../../helpers/utils';
import { SafeAreaView, View, Text, Animated, StatusBar } from 'react-native';
import styles from '../../styles/selectplantproject/selectplantproject-full';
import PlantProjectDetails from './PlantProjectDetails';
import FullHeightButton from '../Common/Button/FullHeightButton';
import { ScrollView } from 'react-native';
import { right_arrow_button } from '../../assets';
import PlantProjectSnippetDetails from './PlantProjectSnippetDetails.native';
import scrollStyle from '../../styles/common/scrollStyle.native';
import { formatNumber } from '../../utils/utils';
import { connect } from 'react-redux';
import LoadingIndicator from '../Common/LoadingIndicator.native';
import { bindActionCreators } from 'redux';
import HeaderAirBnb from '../Header/HeaderAirBnb.native';
// import TabContainer from '../../containers/Menu/TabContainer';
/**
 * see: https://github.com/Plant-for-the-Planet-org/treecounter-platform/wiki/Component-PlantProjectFull
 */
class PlantProjectFull extends React.Component {
  constructor(props) {
    super(props);
    const plantProject = { ...props.plantProject };
    this.state = {
      plantProject,
      scrollY: new Animated.Value(0)
    };
  }
  async componentWillReceiveProps(nextProps) {
    try {
      console.log('plantproject while receive props', nextProps.plantProject);
      if (nextProps.plantProject && !nextProps.plantProject.tpoData) {
        // we dont have the details in store, fetch it
        const plantProject = await this.props.loadProject(
          nextProps.plantProject,
          {}
        );
        console.log('fetched details plantproject in full', plantProject);
        // this.setState({ plantProject });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidMount() {
    try {
      console.log('plantproject while did mount', this.props.plantProject);
      if (this.props.plantProject && !this.props.plantProject.tpoData) {
        // we dont have the details in store, fetch it
        const plantProject = await this.props.loadProject(
          this.props.plantProject,
          {}
        );
        console.log('fetched details plantproject in full', plantProject);
        // this.setState({ plantProject });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    StatusBar.setTranslucent(true);
  }
  componentWillUnmount() {
    StatusBar.setTranslucent(false);
  }
  render() {
    let { plantProject } = this.props;

    if (!plantProject || !plantProject.tpoData) return <LoadingIndicator />;
    const {
      images,
      description,
      homepageUrl: homepageUrl,
      homepageCaption: homepageCaption,
      videoUrl: videoUrl,
      geoLocation,
      plantProjectImages,
      url,
      linkText,
      tpoName,
      ndviUid
    } = plantProject;
    let tpo = plantProject.tpoData || {};
    const detailsProps = {
      description,
      images,
      homepageUrl,
      homepageCaption,
      videoUrl,
      mapData: queryParamsToObject(geoLocation),
      plantProjectImages,
      url,
      linkText,
      ndviUid,
      tpo
    };

    const navigation = this.props.navigation;
    const backgroundColor = 'white';

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="rgba(52, 52, 52, 0.0)"
          barStyle={'dark-content'}
        />
        <HeaderAirBnb
          navigation={this.props.navigation}
          title={''}
          scrollY={this.state.scrollY}
        />
        <ScrollView
          contentContainerStyle={[
            scrollStyle.styleContainer,
            {
              backgroundColor: backgroundColor
            }
          ]}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: { y: this.state.scrollY }
              }
            }
          ])}
        >
          <PlantProjectSnippetDetails
            key={'projectFull' + plantProject.id}
            showMoreButton={false}
            clickable={false}
            plantProject={plantProject}
            onSelectClickedFeaturedProjects={id => this.props.selectProject(id)}
            tpoName={tpoName}
            selectProject={this.props.selectProject}
            navigation={navigation}
          />

          {/* <View style={styles.horizontalRule} /> */}
          <View style={styles.plantProjectDetails}>
            <PlantProjectDetails
              currentUserProfile={this.props.currentUserProfile}
              navigation={navigation}
              {...detailsProps}
            />
          </View>
        </ScrollView>
        {plantProject.allowDonations ? (
          <View style={styles.bottomActionArea}>
            <View style={styles.centeredContentContainer}>
              <View>
                <Text style={[styles.cost]}>
                  {formatNumber(
                    plantProject.treeCost,
                    null,
                    plantProject.currency
                  )}
                </Text>
              </View>

              <Text style={[styles.costPerTree]}>
                {i18n.t('label.cost_per_tree')}
              </Text>
            </View>
            <FullHeightButton
              buttonStyle={styles.squareButton}
              onClick={() => this.props.selectProject(plantProject.id)}
              image={right_arrow_button}
            >
              {i18n.t('label.donate')}
            </FullHeightButton>
          </View>
        ) : null}
      </View>
    );
  }
}

PlantProjectFull.propTypes = {
  plantProject: PropTypes.object.isRequired,
  projectClear: PropTypes.func,
  showNextButton: PropTypes.bool,
  onNextClick: PropTypes.func,
  selectProject: PropTypes.func,
  onBackClick: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadProject
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(PlantProjectFull);
