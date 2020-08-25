import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Directory.scss';

import selectDirectorySections from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) => (
  <div className='Directory'>{ 
    sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))     
  }</div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);