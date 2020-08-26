import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const Roadmap = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const roadmaps = t('roadmaps', { returnObjects: true });

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'roadmap']);
  }, [props]);

  const renderRoadmaps = () => (
    <Timeline align="alternate">
      {roadmaps.map((roadmap, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {roadmap.datetime}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>{roadmap.icon()}</TimelineDot>
            {roadmaps.length !== index + 1 ? <TimelineConnector /> : ''}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {roadmap.title}
              </Typography>
              <Typography>{roadmap.description}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );

  return renderRoadmaps();
};

const useStyles = makeStyles(() => ({
  paper: {
    padding: '6px 16px',
  },
}));

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect('', mapDispatchToProps)(Roadmap);
