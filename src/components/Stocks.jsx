import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack } from '@chakra-ui/react';
import { Typography } from 'antd';
import Loader from "./Loader";

const { Title } = Typography;

const server = 'https://twelve-data1.p.rapidapi.com';
const apiKey = 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'; // Replace this with your actual API key

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`${server}/stocks`, {
          headers: {
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
          }
        });

        console.log(response.data.data); // Log the response data

        if (response.data && response.data.data) {
          setStocks(response.data.data.slice(0,99)); // Set all stocks
          setLoading(false);
        } else {
          throw new Error('Invalid data format received from the API');
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setError('Failed to fetch stock data. Please try again later.');
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return (
    <>
      <style>
        {`
        .stock-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          width: 200px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .stock-info {
          font-size: 14px;
          line-height: 1.6;
        }

        .heading {
          margin-bottom: 20px;
        }
        `}
      </style>
      <Title level={2} className="heading">Stocks Stats</Title>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : stocks.length === 0 ? (
          <div>No data available</div>
        ) : (
          <HStack wrap={"wrap"} spacing={4}>
            {stocks.map(stock => (
              <div key={stock.symbol} className="stock-card">
                <div className="stock-info">
                  <div>Name: {stock.name}</div>
                  <div>Symbol: {stock.symbol}</div>
                  <div>Type: {stock.type}</div>
                  <div>Country: {stock.country}</div>
                  <div>Currency: {stock.currency}</div>
                </div>
              </div>
            ))}
          </HStack>
        )}
      </Container>
    </>
  );
};

export default Stocks;
