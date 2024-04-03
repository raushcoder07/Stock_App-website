import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HStack, Spinner } from '@chakra-ui/react';

const options = {
  method: 'GET',
  url: 'https://mboum-finance.p.rapidapi.com/v1/markets/news',
  params: {
    tickers: 'AAPL,TSLA'
  },
  headers: {
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
    'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
  }
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log("Response data:", response.data);
        setNews(response.data.body);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("News:", news);

  return (
    <div>
      <h2>News</h2>
      {loading ? (
        <Spinner />
      ) : (
        <HStack wrap={"wrap"} spacing={4}>
          {news.map((item, index) => (
            <div key={index} style={{ margin: '10px', width: '400px' }}>
              <h3>{item.title}</h3>
              <p>Source: {item.source}</p>
              <p>Publication Date: {new Date(item.pubDate).toLocaleString()}</p>
              <p><a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a></p>
              <p>Additional Info: {item['?src=A00220&yptr=yahoo']}</p>
            </div>
          ))}
        </HStack>
      )}
    </div>
  );
};

export default News;
