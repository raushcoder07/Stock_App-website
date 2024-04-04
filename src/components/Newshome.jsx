import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HStack, Spinner } from '@chakra-ui/react';

const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/stock-news',
    params: {
      symbol: 'AAPL:NASDAQ',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };

const Newshome = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setNews(response.data.articles);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>News</h2>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <HStack wrap={"wrap"} spacing={4}>
          { Array.isArray(news) && news.map((article, index) => (
           <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '300px', marginBottom: '20px' }}>
           <h3>{article.article_title}</h3>
           <p><strong>Source:</strong> {article.source}</p>
           <p><strong>Post Time (UTC):</strong> {article.post_time_utc}</p>
           <a href={article.article_url} target="_blank" rel="noopener noreferrer">Read more</a>
           <div>
             <img src={article.article_photo_url} alt="Article" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
           </div>
         </div>
          ))}
        </HStack>
      )}
    </div>
  );
};

export default Newshome;
