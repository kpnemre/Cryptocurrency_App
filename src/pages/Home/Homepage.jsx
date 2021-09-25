import React from "react";
import "./Homepage.css";
import { Alert, Col, Row, Spin, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../../services/cyrptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import {Ctyptocurrencies } from "../Ctyptocurrencies/Ctyptocurrencies"
import {News } from "../News/News"

const { Title } = Typography;

export const Homepage = () => {
  const { data, isLoading, isError } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;
  console.log("dtaa", globalStats);

  if (isLoading) {
    <Spin size="large" />;
  } else if (isError) {
    <Alert message="Network error" type="error" />;
  }
 
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      {globalStats && (
      <Row gutter={[32, 32]}>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
      <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
    </Row>)}

    <div className="home-heading-container">
      <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
    </div>
    <Ctyptocurrencies simplified />
    <div className="home-heading-container">
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3}><Link to="/news">Show more</Link></Title>
    </div>
    <News simplified />
      
      
    </>
  );
};
