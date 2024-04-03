import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
          'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        data: {
          messages: [
            {
              role: 'user',
              content: input
            }
          ],
          web_access: false,
          system_prompt: '',
          temperature: 0.9,
          top_k: 5,
          top_p: 0.9,
          max_tokens: 256
        }
      };
      
      const response = await axios.request(options);
      setResponse(response.data.messages[0].content);
    } catch (error) {
      console.error(error);
      setResponse('Error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask your question..."
          required
        />
        <button type="submit">Ask</button>
      </form>
      {loading ? <Loader /> : <p>{response}</p>}
    </div>
  );
};

export default ChatBot;
