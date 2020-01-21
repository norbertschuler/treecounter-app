/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { delimitNumbers } from './../../utils/utils';
import { readmoreDown, readmoreUp } from './../../assets/';
import { updateRoute } from './../../helpers/routerHelper';

import styles from '../../styles/user-home';
import tabStyles from '../../styles/common/tabbar';
import * as images from '../../assets';

import CardLayout from '../Common/Card';
import SvgContainer from '../Common/SvgContainer';
import UserProfileImage from '../Common/UserProfileImage';
import ContributionCardList from '../UserContributions/ContributionCardList';
import PlantProjectSnippet from './../PlantProjects/PlantProjectSnippet.native';
import i18n from '../../locales/i18n';
import CompetitionSnippet from './app/CompetitionSnippet.native';
const Layout = {
  window: {
    width: Dimensions.get('window').width
  }
};

export default class UserHome extends Component {
  constructor(props) {
    super(props);

    let svgData = {};
    const { treecounterData, userProfile } = props;
    if (treecounterData) {
      svgData = { ...treecounterData, type: userProfile.type };
    }
    this.state = {
      svgData: svgData,
      routes: [
        { key: 'home', title: i18n.t('label.home') },
        { key: 'my-trees', title: i18n.t('label.my_trees') }
      ],
      index: 0,
      showAllContributions: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { treecounterData, userProfile } = nextProps;
    if (treecounterData) {
      let svgData = { ...treecounterData, type: userProfile.type };
      this.setState({ svgData });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate =
      JSON.stringify(nextProps) !== JSON.stringify(this.props) ||
      nextState.index != this.state.index;
    return shouldUpdate;
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  updateSvg(toggle) {
    if (toggle) {
      const treecounter = this.props.treecounterData;
      if (isNaN(parseInt(treecounter.community))) {
        treecounter.community = 0;
      }
      if (isNaN(parseInt(treecounter.personal))) {
        treecounter.personal = 0;
      }
      let svgData = {
        id: treecounter.id,
        target: treecounter.community + treecounter.personal, // light color
        planted: treecounter.personal, //dark color
        community: treecounter.community,
        personal: treecounter.personal,
        targetComment: treecounter.targetComment,
        targetYear: treecounter.targetYear,
        type: this.props.userProfile.type
      };
      this.setState({ svgData: Object.assign({}, svgData) });
    } else {
      const treecounter = this.props.treecounterData;
      let svgData = {
        id: treecounter.id,
        target: treecounter.target,
        planted: treecounter.planted,
        community: treecounter.community,
        personal: treecounter.personal,
        targetComment: treecounter.targetComment,
        targetYear: treecounter.targetYear,
        type: this.props.userProfile.type
      };
      this.setState({ svgData: Object.assign({}, svgData) });
    }
  }

  _goToURL(url) {
    Linking.openURL(url).catch(err => console.log('Cannot open URI', err));
  }

  readMore() {
    this.setState({
      showAllContributions: !this.state.showAllContributions
    });
    alert(this.state.showAllContributions);
  }

  render() {
    const { userProfile } = this.props;
    const profileType = userProfile.type;
    let { svgData, showAllContributions } = this.state;

    console.log(userProfile);
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 72 }}>
        <View>
          <View style={styles.header}>
            <View style={styles.userProfileContainer}>
              <UserProfileImage
                imageStyle={styles.userProfileImage}
                profileImage={userProfile.image}
              />

              <View style={styles.userInfo}>
                <View style={styles.userInfoName}>
                  <Text style={styles.nameStyle}>
                    {userProfile.treecounter.displayName}
                  </Text>
                </View>
                <View style={styles.userInfoProfileType}>
                  <Image
                    style={styles.profileTypeImage}
                    resizeMode="contain"
                    source={
                      profileType === 'education'
                        ? images['schoolIcon']
                        : profileType === 'tpo'
                          ? images['tpoIcon']
                          : profileType === 'company'
                            ? images['companyIcon']
                            : images['individualIcon']
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.svgContainer}>
            <SvgContainer
              {...svgData}
              onToggle={toggleVal => this.updateSvg(toggleVal)}
            />
          </View>
        </View>
        <View style={styles.buttonViewRow}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              updateRoute('app_redeem', this.props.navigation);
            }}
          >
            <Text style={styles.secondaryButtonText}>Redeem Trees</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              updateRoute('app_registerTrees', this.props.navigation);
            }}
          >
            <Text style={styles.primaryButtonText}>Register Trees</Text>
          </TouchableOpacity>
        </View>
        {userProfile.supportedTreecounter ? (
          <View>
            <View style={styles.dedicatedContainer}>
              <Text style={styles.dedicatedTitle}>Dedicate my trees to</Text>
              <TouchableOpacity
                onPress={() => {
                  updateRoute('pickup_profile_modal', this.props.navigation);
                }}
              >
                <Text style={styles.dedicatedEdit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.dedicatedContainer2}>
              <UserProfileImage
                profileImage={userProfile.supportedTreecounter.avatar}
                imageType="avatar"
                imageStyle={{
                  height: 32,
                  width: 32,
                  borderRadius: 32 / 2
                }}
              />
              <Text style={styles.dedicatedName}>
                {userProfile.supportedTreecounter.displayName}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {userProfile.synopsis1 ? (
          <View>
            <View style={styles.dedicatedContainer}>
              <Text style={styles.dedicatedTitle}>About</Text>
              <TouchableOpacity
                onPress={() => {
                  updateRoute('app_editProfile', this.props.navigation);
                }}
              >
                <Text style={styles.dedicatedEdit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              {userProfile.synopsis1 ||
              userProfile.synopsis2 ||
              userProfile.linkText ||
              userProfile.url ? (
                <View>
                  {userProfile.synopsis1 ? (
                    <Text style={styles.footerText}>
                      {userProfile.synopsis1}
                    </Text>
                  ) : null}
                  {userProfile.synopsis2 ? (
                    <Text style={styles.footerText}>
                      {userProfile.synopsis2}
                    </Text>
                  ) : null}
                  {userProfile.url ? (
                    <Text
                      style={styles.linkText}
                      onPress={() => this._goToURL(userProfile.url)}
                    >
                      {userProfile.linkText || i18n.t('label.read_more')}
                    </Text>
                  ) : null}
                </View>
              ) : null}
            </View>
          </View>
        ) : null}

        {/* Competitions */}
        {userProfile.treecounter.competitions.length > 0 ? (
          <View style={{ paddingVertical: 20 }}>
            <View style={styles.competitionsContainer}>
              <Text style={styles.dedicatedTitle}>My Competitions</Text>
              <TouchableOpacity>
                <Text
                  style={styles.dedicatedEdit}
                  onPress={() => {
                    updateRoute('app_competitions', this.props.navigation);
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20 }}
            >
              {userProfile.treecounter.competitions.length > 0
                ? userProfile.treecounter.competitions.map(competition => (
                    <CompetitionSnippet
                      key={'competition' + competition.id}
                      onMoreClick={id =>
                        this.props.onMoreClick(id, competition.name)
                      }
                      competition={competition}
                      type="all"
                    />
                  ))
                : null}
            </ScrollView>
          </View>
        ) : null}

        {userProfile.plantProjects ? (
          <Text
            style={{
              fontFamily: 'OpenSans-SemiBold',
              fontSize: 17,
              lineHeight: 23,
              letterSpacing: 0,
              textAlign: 'left',
              color: '#4d5153',
              paddingLeft: 20,
              marginTop: 20
            }}
          >
            Projects
          </Text>
        ) : null}
        <ScrollView>
          {userProfile.plantProjects
            ? userProfile.plantProjects.map(project => (
                <PlantProjectSnippet
                  key={'projectFull' + project.id}
                  //  onMoreClick={id => this.props.onMoreClick(id, project.name)}
                  plantProject={project}
                  //  onSelectClickedFeaturedProjects={this.onSelectClickedFeaturedProjects}
                  showMoreButton={false}
                  tpoName={project.tpo_name}
                  //  selectProject={this.props.onSelectProjects}
                  navigation={this.props.navigation}
                />
              ))
            : null}
        </ScrollView>

        {this.props.userContributions.length ? (
          <View contentContainerStyle={{ paddingBottom: 72, marginTop: 20 }}>
            <Text
              style={{
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 17,
                lineHeight: 23,
                letterSpacing: 0,
                textAlign: 'left',
                color: '#4d5153',
                paddingLeft: 20,
                paddingBottom: 20
              }}
            >
              My Trees
            </Text>
            <ContributionCardList
              contributions={this.props.userContributions}
              deleteContribution={this.props.deleteContribution}
              showAllContributions={showAllContributions}
            />
          </View>
        ) : null}

        {this.props.userContributions &&
        this.props.userContributions.length > 3 ? (
          showAllContributions ? (
            <View style={{ backgroundColor: '#f7f7f7', paddingVertical: 20 }}>
              <TouchableOpacity
                style={{
                  width: 138,
                  borderRadius: 30,
                  backgroundColor: '#ffffff',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#4d5153',
                  alignSelf: 'center',
                  padding: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => this.readMore()}
              >
                <Image
                  source={readmoreUp}
                  style={{ height: 8, width: 15, marginRight: 8 }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 14,
                    lineHeight: 21,
                    color: '#4d5153',
                    textAlign: 'center'
                  }}
                >
                  Show less
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ backgroundColor: '#f7f7f7', paddingVertical: 20 }}>
              <TouchableOpacity
                style={{
                  width: 138,
                  borderRadius: 30,
                  backgroundColor: '#ffffff',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#4d5153',
                  alignSelf: 'center',
                  padding: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => this.readMore()}
              >
                <Image
                  source={readmoreDown}
                  style={{ height: 8, width: 15, marginRight: 8 }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 14,
                    lineHeight: 21,
                    color: '#4d5153',
                    textAlign: 'center'
                  }}
                >
                  Show all
                </Text>
              </TouchableOpacity>
            </View>
          )
        ) : null}
      </ScrollView>
    );
  }
}

UserHome.propTypes = {
  treecounterData: PropTypes.object,
  userProfile: PropTypes.object,
  userProfileId: PropTypes.number.isRequired,
  userContributions: PropTypes.array.isRequired,
  deleteContribution: PropTypes.func,
  navigation: PropTypes.any
};
