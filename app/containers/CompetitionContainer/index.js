import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { debug } from '../../debug';
import Competiton from '../../components/Competition';
import { updateRoute } from '../../helpers/routerHelper';
import { formatDateToMySQL } from '../../helpers/utils';
import {
  createCompetition,
  enrollCompetition,
  fetchCompetitions,
  fetchMineCompetitions,
  leaveCompetition
} from '../../actions/competition';
import { getAllCompetitionsSelector } from '../../selectors';
import { getContentLoaderState } from '../../reducers/contentloaderReducer';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import { supportTreecounterAction } from '../../actions/supportTreecounterAction';
import { competitionFormSchemaOptions } from '../../server/parsedSchemas/competition';
import { handleServerResponseError } from '../../helpers/utils';

class CompetitionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitionFormSchemaOptions
    };
  }

  componentDidMount() {
    this.fetchCompetitions('all', 1);
    this.fetchCompetitions('archived', 1);
    this.fetchCompetitions('featured', 1);
  }

  createCompetition = value => {
    if (value) {
      let newvalue = {
        ...value,
        endDate: formatDateToMySQL(value.endDate)
      };
      this.props
        .createCompetition(newvalue, this.props.navigation)
        .then((/* success */) => {})
        .catch(err => {
          debug('err signup data', err);
          let newSchemaOptions = handleServerResponseError(
            err,
            this.state.competitionFormSchemaOptions
          );
          this.setState({
            competitionFormSchemaOptions: {
              ...newSchemaOptions
            }
          });
        });
    }
  };

  leaveCompetition(id) {
    this.props.leaveCompetition(id);
  }
  enrollCompetition(id) {
    this.props.enrollCompetition(id);
  }
  editCompetition(id) {
    const { navigation } = this.props;
    if (navigation) {
      updateRoute('app_editCompetition', navigation, 1, {
        competition: id
      });
    }
  }

  fetchCompetitions = (category, page) => {
    this.props.fetchCompetitions(category, page);
  };

  fetchMineCompetitions = async () => {
    this.props.fetchMineCompetitions();
  };

  render() {
    debug(this.props.contentloader, '**********************');
    console.log('\x1b[41m');
    console.log('\nthis.props.allCompetitions', this.props.allCompetitions);
    console.log('\x1b[42m');
    console.log(
      '\nthis.props.featuredCompetitions',
      this.props.featuredCompetitions
    );
    console.log('\x1b[41m');
    console.log(
      '\nthis.props.archivedCompetitions',
      this.props.archivedCompetitions
    );
    console.log('\x1b[0m');
    const { contentloader } = this.props;
    return !contentloader ? (
      <Competiton
        allCompetitions={this.props.allCompetitions}
        featuredCompetitions={this.props.featuredCompetitions}
        archivedCompetitions={this.props.archivedCompetitions}
        onMoreClick={(id, name) => this.onMoreClick(id, name)}
        leaveCompetition={id => this.leaveCompetition(id)}
        enrollCompetition={id => this.enrollCompetition(id)}
        onCreateCompetition={this.createCompetition}
        competitionFormSchemaOptions={this.state.competitionFormSchemaOptions}
        supportTreecounterAction={this.props.supportTreecounterAction}
        editCompetition={id => this.editCompetition(id)}
        navigation={this.props.navigation}
        fetchMineCompetitions={() => this.fetchMineCompetitions()}
        fetchCompetitions={(category, page) =>
          this.fetchCompetitions(category, page)
        }
      />
    ) : (
      <LoadingIndicator contentLoader screen="Competition" />
    );
  }

  onMoreClick(id, name) {
    const { navigation } = this.props;
    if (navigation) {
      updateRoute('app_competition', navigation, 1, {
        competition: id,
        titleParam: name
      });
    }
  }
}
const mapStateToProps = state => ({
  // allCompetitions: getAllCompetitionsSelector(state),
  contentloader: getContentLoaderState(state),
  allCompetitions: state.competitionsReducer.allCompetitions,
  featuredCompetitions: state.competitionsReducer.featuredCompetitions,
  archivedCompetitions: state.competitionsReducer.archivedCompetitions
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCompetitions,
      fetchMineCompetitions,
      leaveCompetition,
      enrollCompetition,
      createCompetition,
      supportTreecounterAction
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetitionContainer);
CompetitionContainer.propTypes = {
  navigation: PropTypes.any,
  fetchCompetitions: PropTypes.any,
  allCompetitions: PropTypes.any,
  fetchMineCompetitions: PropTypes.any,
  leaveCompetition: PropTypes.any,
  enrollCompetition: PropTypes.any,
  createCompetition: PropTypes.any,
  supportTreecounterAction: PropTypes.any
};
