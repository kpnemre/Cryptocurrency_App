import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Spin } from "antd";
import { useGetCryptosQuery } from "../services/cyrptoApi";


export const Ctyptocurrencies = ({simplified}) => {
const count = simplified ? 10:100
    const [searchTerm, setSearchTerm] = useState('');
  const { data, isFetching } = useGetCryptosQuery(count);
  console.log("data:",data?.data?.coins);
  const currencies = data?.data?.coins;
//   const [cryptos, setCryptos] = useState(currencies)


  if (isFetching) {
    <Spin size="large" />;
  }
  useEffect(() => {
    
  }, [data, searchTerm])

  const filteredData= currencies?.filter((item)=> item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log("emre:",filteredData );

  return (
    <>
    {!simplified && (
    <div className="search-crypto">
    <Input placeholder="Search Cyrpto Currency" onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>
    )}
   
      <Row gutter={[32, 32]} className="crypto-card-container">
        {filteredData?.map((currency) => (
          <Col xs={24} sm={12} lg={6} key={currency.id} className="crypto-card">
            <Link to={`/crypto/${currency.id}`}>
              <Card
              hoverable
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    src={currency.iconUrl}
                    alt="currency"
                    className="crypto-image"
                  />
                }>
                    <p>Price:{millify(currency?.price)}</p>
                    <p>Market Cap:{millify(currency?.marketCap)}</p>
                    <p>Daily Change:{millify(currency?.change)}%</p>
                    <p>Number of Exchanges:{millify(currency?.numberOfExchanges)}</p>
                    <p>Number of Markets:{millify(currency?.numberOfMarkets)}</p>
                </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

// approvedSupply: true
// change: 0.74
// circulatingSupply: 18829618
// color: "#f7931A"
// confirmedSupply: true
// description: "<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n"
// firstSeen: 1330214400000
// history: (27) ['41528.1167776488', '41535.6628440768', '41307.8269840334', '41458.3068400911', '41663.4298940948', '41714.3325745509', '41883.5653757397', '41795.7280453499', '41653.2373138288', '41090.748420598', '41628.0268812233', '41575.4374835501', '41760.8452087897', '42076.817502999', '42262.9135543897', '42183.3424357881', '42285.6460075608', '42409.8049524558', '42344.2905191567', '42235.5864148116', '42368.0354421436', '42349.1517360716', '42254.9758618536', '42068.2369275598', '42179.0395367903', '42082.0767145573', '41835.5927169678']
// iconType: "vector"
// iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
// id: 1
// links: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// listedAt: 1330214400
// marketCap: 787748229664
// name: "Bitcoin"
// numberOfExchanges: 346
// numberOfMarkets: 21627
// penalty: false
// price: "41835.5927169678"
// rank: 1
// slug: "bitcoin-btc"
// socials: (2) [{…}, {…}]
// symbol: "BTC"
// totalSupply: 18829618
// type: "coin"
// uuid: "Qwsogvtv82FCd"
// volume: 29355590507
// websiteUrl: "https://bitcoin.org"
