import React from 'react';
import { Button, Menu, Typography, Avatar,Divider } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined,UserOutlined, KeyOutlined, StockOutlined ,DollarTwoTone} from "@ant-design/icons";
import icon from "../images/download (5).jpeg";
import SubMenu from 'antd/es/menu/SubMenu';


const Navbar = () => {
  const [mode, setMode] = React.useState("inline");

  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };


  return (
   <div className="nav-container">
    <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
            <Link to="/">Stockverse</Link>
        </Typography.Title>
    </div>

    <Divider type="vertical" />
     <Menu theme="dark" >
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          
          <Menu.Item icon={<FundOutlined/>}>
            <Link to='/stocks'>Stocks</Link>
          </Menu.Item>

        <SubMenu key="sub1" icon={<DollarTwoTone />} title="stocks Trends"> 
          <Menu.Item icon={<StockOutlined/>}>
            <Link to='/trend'>Trend</Link>
          </Menu.Item>
          <Menu.Item icon={<StockOutlined/>}>
            <Link to='/demochart'>DemoChart</Link>
          </Menu.Item>
          
         </SubMenu>

         <SubMenu key="sub2" icon={<KeyOutlined />} title="Knowledge"> 

          <Menu.Item icon={<KeyOutlined/>}>
            <Link to='/tutorials'> Tutorials</Link>
          </Menu.Item>
          <Menu.Item icon={<KeyOutlined/>}>
            <Link to='/technicalanalysis'>TechnicalAnalysis</Link>
          </Menu.Item>
          <Menu.Item icon={<KeyOutlined/>}>
            <Link to='/quiz'>Quiz</Link>
          </Menu.Item>


         </SubMenu>

          <Menu.Item icon={<BulbOutlined/>}>
            <Link to='/news'>News</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined/>}>
            <Link to='/mystockverse'>MyStockVerse</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined/>}>
            <Link to='/Communitypost'>CommunityPost</Link>
          </Menu.Item>



     </Menu>

   </div>
  );
};

export default Navbar;
