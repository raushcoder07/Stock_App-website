// CommunityPost.js
import React from 'react';
import QuestionAnswerPage from './QuestionAnswerPage';
import { Typography } from 'antd'; 
import ChatBot from './ChatBot';

const { Title } = Typography;

const CommunityPost = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2} className="community">Community Post</Title>
      </div>
      <div style={{ width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <QuestionAnswerPage />
      </div>
      <div><ChatBot/></div>
    </div>
  );
}

export default CommunityPost;
