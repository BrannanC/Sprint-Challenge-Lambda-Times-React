import React from 'react';
import PropType from 'prop-types'

const Tab = props => {
  return (
    <div
      className={props.selectedTab === props.tab ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropType.string.isRequired,
  tab: PropType.string.isRequired,
  selectTabHandler: PropType.func.isRequired,
}

export default Tab;
