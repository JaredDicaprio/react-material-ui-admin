import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import { FULLSCREEN_SHOW } from '../store/actions/actionTypes';

const AppFullScreen = (props) => {
  const state = {
    fullscreenShow: props.fullscreenShow,
    fullscreenBtn: props.fullscreenBtn,
  };

  const toggleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
      return props.onToggleFullScreen(true);
    }

    cancelFullScreen.call(doc);
    return props.onToggleFullScreen(false);
  };

  return state.fullscreenBtn === true ? (
    <IconButton onClick={toggleFullScreen} edge="start" color="inherit">
      {state.fullscreenShow === false ? (
        <FullscreenIcon />
      ) : (
        <FullscreenExitIcon />
      )}
    </IconButton>
  ) : (
    ''
  );
};

const mapStateToProps = (state) => ({
  fullscreenShow: state.fullscreenShow,
  fullscreenBtn: state.fullscreenBtn,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleFullScreen: (action) =>
    dispatch({ type: FULLSCREEN_SHOW, show: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppFullScreen);
