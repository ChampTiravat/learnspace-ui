import styled, { keyframes } from 'styled-components'

export default {
  PRIMARY_COLOR: '#3b90f9',
  DANGER_COLOR: '#e57373',
  WARNING_COLOR: '#ffb74d',
  SUCCESS_COLOR: '#4db6ac',
  INFO_COLOR: '#4dd0e1',
  FONT_COLOR_LIGHT: '#fff',
  BACKGROUND_COLOR: '#f5f5f5',
  TEXT_COLOR: '#777',
  TEXT_INPUT_BACKGROUND_COLOR: '#F3F3F3',
  BORDER_RADIUS: '7px',

  // Animations
  SHOW_FROM_TOP: keyframes`
    from { transform: translateY(-1em); }
      to { transform: translateY(1);    }
  `
}
