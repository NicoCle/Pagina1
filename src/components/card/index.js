import React from "react";
import "./styles.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Card = () => {
  return (
    <div className="card-content">
      <Tabs type="card">
        <TabPane tab="Nahuel" key="1">
          gei
        </TabPane>
        <TabPane tab="Negro" key="2">
          tarado
        </TabPane>
        <TabPane tab="Brai" key="3">
          puto
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Card;
