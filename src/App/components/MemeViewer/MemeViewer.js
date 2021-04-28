import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={'0 0 1280 720'}>
  
    <image x={0} y={0} href={props.meme.image} />
    <text x={props.meme.text.x}
     y={props.meme.text.y}
    fill={props.meme.text.color}
    style={{textDecoration:props.meme.text.underline ?'underline' : 'none',
    fontWeight: props.meme.text.bold? 'bold':'normal',
    fontSize: 50}}>
      {props.meme.text.value}</text>
      <text x={15} y={15} >{props.meme.name}</text>
  </svg>
);

MemeViewer.propTypes = {name: PropTypes.object.isRequired,};

MemeViewer.defaultProps = {};

export default MemeViewer;
