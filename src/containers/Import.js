import {connect} from 'react-redux';
import Import from '../components/Import';
import fetchMakes from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    result: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: (result) => dispatch(fetchMakes(result)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)