import React, { useState } from "react";
import "./scss/tabs.scss";
import SpaceImg from "./img/space.png";

function TapComponent(props) {
  const tapFeature = props.feature;
  const tapUsage = props.usage;

  return (
    <>
      <div className="tabs">
        <Tabs>
          <Tab label="รายละเอียดสินค้า">
            <div>
              <ul>
                คุณสมบัติสายไฟ
                <div className="class__li">
                  {tapFeature.map((item, i) => (
                    <li key={i}>{item.feature_pd}</li>
                  ))}
                </div>
              </ul>
              <ul>
                การใช้งาน
                <div className="class__li">
                  {tapUsage.map((item, i) => (
                    <li key={i}>{item.usage_pd}</li>
                  ))}
                </div>
              </ul>
            </div>
          </Tab>
          <Tab label="ข้อมูลสเปค">
            <div>
              <img src={SpaceImg} />
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default TapComponent;

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button, i) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
            key={i}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
