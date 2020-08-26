import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { LOCALE } from '../../store/actions/actionTypes';

const Language = (props) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const locale = props.locale;

  const toggleLocale = (event) => {
    const locale = event.target.value;
    i18n.changeLanguage(locale, (err /*, t*/) => {
      if (err) return console.log('something went wrong loading', err);
      //t('key'); // -> same as i18next.t
      props.onToggleLocale(locale);
    });
  };

  return (
    <Grid container spacing={2} justify="space-around">
      <Grid item sm={12} md={4} xs={12}>
        <Card>
          <CardHeader
            title="Switch Language"
            className={classes.cardHeader}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="i18n"
                    name="i18n"
                    value={locale}
                    onChange={toggleLocale}
                  >
                    <FormControlLabel
                      value="en"
                      control={<Radio />}
                      label="English"
                    />
                    <FormControlLabel
                      value="pt"
                      control={<Radio />}
                      label="Português"
                    />
                    <FormControlLabel
                      value="es"
                      control={<Radio />}
                      label="Español"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
  },
}));

const mapStateToProps = (state) => ({
  locale: state.locale,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleLocale: (locale) => dispatch({ type: LOCALE, locale: locale }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Language);
