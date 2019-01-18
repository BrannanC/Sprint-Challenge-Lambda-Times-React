import React from 'react';
import PropType from 'prop-types'
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        { props.tabs.map(el => <Tab 
                                tab={el} 
                                selectedTab={props.selectedTab} 
                                selectTabHandler={props.selectTabHandler}
                                key={el} 
                                />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropType.arrayOf(PropType.string).isRequired
}

export default Tabs;
