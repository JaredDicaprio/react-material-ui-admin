import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grids from './Grids';
import GridsSpace from './GridsSpace';
import GridsOthers from './GridsOthers';
import GridsOthersSquare from './GridsOthersSquare';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const GridApp = (props) => {
  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'materialui', 'grid']);
  }, [props]);

  return (
    <div>
      <Grids />
      <GridsSpace />
      <GridsOthers />
      <GridsOthersSquare />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect('', mapDispatchToProps)(GridApp);
