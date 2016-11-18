import { PropTypes } from 'react';

import {
  START_DATE,
  END_DATE,
} from '../../constants';

export default PropTypes.oneOf([START_DATE, END_DATE, '', null]);
