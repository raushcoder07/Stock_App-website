import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,space} from 'antd';
import {Navbar,Exchanges,Homepage,News,Stocks,StockDetails,Learn,Trend,DemoChart,CommunityPost} from './components';
import './App.css';

const App = () => {
  return (
     <div className="app">
        <div className="navbar">
             <Navbar/>
        </div>
      <div className="main">
         <Layout>
            <div className="routes">
 <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/demochart" element={<DemoChart />} />
            <Route path="/trend" element={<Trend/>}/>
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/stock/:stockId" element={<StockDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/learn" element={<Learn/>}/>
            <Route path="/communitypost" element={<CommunityPost/>}/>
            {/* <Route path="/stockverse" element={<MyStockVerse/>} /> */}

</Routes>
            </div>
         </Layout>
      <div className="footer">
         <Typography.Title  level={5} style={{color:'white',textAlign:'center'}}>
            Stockverse<br/>
            All right reserverd
         </Typography.Title>
         <space>
            <Link to="/">Home</Link>
            <Link to="/stock">Stock</Link>
            <Link to="/news">News</Link>
          </space>
          </div>
        </div>
     </div> 

  )
}

export default App