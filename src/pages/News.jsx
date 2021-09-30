import React, { useState } from 'react'

import { Row, Col, Avatar,Typography,Select, Spin, Card} from "antd"
import { useGetNewsQuery } from '../services/newsApi';
import { useGetCryptosQuery } from '../services/cyrptoApi';
import moment from 'moment';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

export const News = ({ simplified }) => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  
    if (!cryptoNews?.value) return  <Spin size="large" />;;
  
    return (
        <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => <Option key={currency.id} value={currency.name}>{currency.name}</Option>)}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.name}</Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    )
}

