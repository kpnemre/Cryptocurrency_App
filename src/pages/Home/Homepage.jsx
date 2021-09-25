import React from "react";
import "./Homepage.css";
import { Col, Row, Statistic, Typography } from "antd";

const { Title } = Typography;

export const Homepage = () => {
  return (
    <div >
      <Title level={2}>Global Crypto Stats</Title>
      <Row >
        <Col span={24}>
          <Statistic title="Total Cryptocurrencies" value={112893} />
          {/* value= real data */}
        </Col>
        <Col span={24}>
          <Statistic title="Total Market Cap" value={112893} />
        </Col>
        <Col span={24}>
          <Statistic title="Total 24h Volumes" value={112893} />
        </Col>
        <Col span={24}>
          <Statistic title="Total Markets" value={112893} />
        </Col>
     
      </Row>
    </div>
  );
};
