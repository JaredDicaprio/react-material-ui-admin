import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import palette from './palette';
/**
 * Styled TextareaAutosize
 */
const textarea = {
  // TEXTAREAAUTOSIZE PRIMARY
  TextareaPrimary: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.primary};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlinePrimary: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.primary};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE SECONDARY
  TextareaSecondary: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.secondary};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineSecondary: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.secondary};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE ERROR
  TextareaError: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.error};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineError: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.error};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE WARNING
  TextareaWarning: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.warning};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineWarning: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.warning};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE INFO
  TextareaInfo: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.info};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineInfo: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.info};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE SUCCESS
  TextareaSuccess: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.success};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineSuccess: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.success};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE ACCENT
  TextareaAccent: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.accent};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineAccent: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.accent};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  // TEXTAREAAUTOSIZE NEUTRAL
  TextareaNeutral: styled(TextareaAutosize)`
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border-bottom: 1px solid #ced4da;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    height: auto;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    letter-spacing: inherit;
    outline: none;
    :focus {
      border-bottom: 2px solid ${palette.neutral};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
  TextareaOutlineNeutral: styled(TextareaAutosize)`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    font-weight: 400;
    letter-spacing: 0.00938em;
    color: #495057;
    background: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px !important;
    height: auto;
    outline: none;
    :focus {
      border: 2px solid ${palette.neutral};
    }
    :hover {
      border-color: ${palette.contrastDark};
    }
  `,
};

export default textarea;
