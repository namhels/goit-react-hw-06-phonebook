import React from 'react';
import PropTypes from 'prop-types';
import { FindIcon, Input } from './Filter.Styled';
import Box from 'components/Box';

const Filter = ({ value, onChange }) => (
    <Box position="relative" display="flex" width="70%">
      <Input type="text" value={value} onChange={onChange} placeholder="Find contacts by name" />
      <FindIcon/>
    </Box>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;