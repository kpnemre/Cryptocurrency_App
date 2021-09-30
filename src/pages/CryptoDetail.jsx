import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select, Spin } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  LinkOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cyrptoApi";
// import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cyrptoApi';

import LineChart from '.././components/LineChart';

const { Title, Text } = Typography;
const { Option } = Select;

export const CryptoDetail = () => {
  // coinId react-router-dom üzerinden

  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  //   console.log("ID:", data?.data?.coin);

  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Spin />;

//   Timeperiod where the change and history are based on

//   Default value: 24h
//   Allowed values:
//   3h 24h 7d 30d 3m 1y 3y 5y

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    // <div>
    //     Cyrpto detail:{coinId}
    // </div>
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {data?.data?.coin.name} ({data?.data?.coin.slug}) Price
        </Title>
        <p>
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />

      <Col className="stats-container">
        {/*  Value Statistics */}
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats?.map(({ icon, title, value, index }) => (
            <Col className="coin-stats" key={index}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        {/* Other Stats Info */}
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Stats Info
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value,index }) => (
            <Col className="coin-stats"key={index}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>

      {/* Descriptions */}

      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails.name}?
          </Title>
          {/* <p>{cryptoDetails.description}</p> */}
          {HTMLReactParser(cryptoDetails.description)}

        </Row>
        {/* Links */}
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails.name} Links
          </Title>
          {cryptoDetails.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
              <LinkOutlined /> {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

// allTimeHigh: {price: '64185.10833403135', timestamp: 1618358400000}
// approvedSupply: true
// change: 3.98
// circulatingSupply: 18830637
// color: "#f7931A"
// confirmedSupply: true
// description: "<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n"
// firstSeen: 1330214400000
// history: (27) ['41511.3538982272', '41360.3495957205', '41320.560199716', '41214.1870509834', '41102.4414688559', '41214.213291417', '41356.7278113433', '41510.1399740273', '42135.3309104581', '42905.759668', '43129.4270710291', '43367.9256276734', '43561.2089532285', '43547.7634472261', '43549.364979387', '43350.4498392375', '43071.4785586916', '43137.881198435', '43084.9845578974', '42986.7233156582', '43232.4713851026', '43416.4010665013', '43085.9231482429', '43214.0865859075', '43037.6518334345', '43042.6992996672', '43162.8517012777']
// iconType: "vector"
// iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
// id: 1
// links: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// listedAt: 1330214400
// marketCap: 812783992272
// name: "Bitcoin"
// numberOfExchanges: 346
// numberOfMarkets: 21632
// penalty: false
// price: "43162.8517012777"
// rank: 1
// slug: "bitcoin-btc"
// socials: (2) [{…}, {…}]
// symbol: "BTC"
// totalSupply: 18830637
// type: "coin"
// uuid: "Qwsogvtv82FCd"
// volume: 28047556181
// websiteUrl: "https://bitcoin.org"
