import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, VStack, Input, Flex, Box } from '@chakra-ui/react';
import { Typography } from 'antd';
import Loader from "./Loader";

const { Title } = Typography;
const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/any',
  headers: {
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

function Stocks() {

  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setStocks(response.data.slice(100,199)); // Set stocks data in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error);
        setError(error); // Set error state if there is an error during fetching
        setLoading(false); // Set loading to false when error occurs
      }
    }

    fetchStocks();
  }, []);

  return (
    <Container maxW="container.md">
      <style>
        {`
        .stock-card {
          background-color: #f8f8f8;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          width: calc(33% - 20px); /* Adjust the width as needed */
          margin-right: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .stock-info {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .heading {
          margin-bottom: 20px;
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .stock-cards-container {
          display: flex;
          flex-wrap: wrap;
        }
        `}
      </style>
      <Title level={2} className="heading">Stocks Stats</Title>
      <Box className="search-bar">
        <Input placeholder="Search..." />
      </Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <VStack spacing="20px" className="stock-cards-container">
          {stocks.map((stock, index) => (
            <div className="stock-card" key={index}>
              <p className="stock-info">Company: {stock?.identifier}</p>
              <p className="stock-info">Symbol: {stock?.symbol}</p>
              <p className="stock-info">Open: {stock?.open}</p>
              <p className="stock-info">Change: {stock?.change}</p>
              <p className="stock-info">Day High: {stock?.dayHigh}</p>
              <p className="stock-info">Day Low: {stock?.dayLow}</p>
              <p className="stock-info">Last Update Time: {stock?.lastUpdateTime}</p>
            </div>
          ))}
        </VStack>
      )}
    </Container>
  );
};

export default Stocks;
