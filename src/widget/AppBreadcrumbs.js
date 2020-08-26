import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import dynamicStyles from '../style/';

const AppBreadcrumbs = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const breadcrumbs = props.dynamicBreadcrumbs.links;

  const firstUpperCase = (text) => {
    return text
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {typeof breadcrumbs === 'object'
        ? breadcrumbs.map((breadcrumb, index) => (
            <MyStyled.LinkPrimary
              key={index}
              to={`/${breadcrumb}`}
              component={RouterLink}
            >
              {firstUpperCase(breadcrumb)}
            </MyStyled.LinkPrimary>
          ))
        : ''}
    </Breadcrumbs>
  );
};

const mapStateToProps = (state) => ({
  dynamicBreadcrumbs: state.dynamicBreadcrumbs,
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(AppBreadcrumbs);
