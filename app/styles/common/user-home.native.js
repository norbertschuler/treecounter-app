import EStyleSheet from 'react-native-extended-stylesheet';

export default (buttonStyles = EStyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  userProfileContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10
  },
  userInfo: {
    padding: 10,
    flexDirection: 'column'
  },
  userInfoName: {
    marginBottom: 10
  },
  svgContainer: {
    width: 370,
    height: 370,
    maxWidth: '100%',
    maxHeight: '100%'
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  nameStyle: {
    fontSize: 17,
    color: '$textColor'
  },
  userInfoProfileType: {
    flexDirection: 'row'
  },
  profileTypeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7c7c6',
    height: 30,
    marginRight: 10,
    padding: 5
  },
  profileTypeStyle: {
    color: '#ffffff',

    fontSize: 15
  }
}));
