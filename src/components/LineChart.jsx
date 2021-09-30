import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    console.log("object::::",coinHistory?.data?.history);
// {price: '44752.9189222267', timestamp: 1632423600000}
    const coinPrice = [];
  const coinTimestamp = [];

  for(let i=0; i< coinHistory?.data?.history?.length; i += 1){
    coinPrice.push(coinHistory?.data?.history[i].price)
  }
  for(let i=0; i< coinHistory?.data?.history?.length; i += 1){
    // coinTimestamp.push(coinHistory?.data?.history[i].timestamp)
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
//   console.log("coinPrice", coinTimestamp);

  const data = {
    labels: coinTimestamp,
    datasets: [{
      label: 'Price in USD',
      data: coinPrice,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
    return (
        <>
        <Row className="chart-header">
          <Title level={2} className="chart-title">{coinName} Price Chart </Title>
          <Col className="price-container">
            <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
            <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
          </Col>
        </Row>
        <Line data={data} />
      </>
    )
}

export default React.memo(LineChart);
