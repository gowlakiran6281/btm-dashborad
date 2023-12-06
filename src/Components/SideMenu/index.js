import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  // ShopOutlined,
  // ShoppingCartOutlined,
  // UserOutlined,
} from "@ant-design/icons";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const routes = [
   
  ];

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        {routes.map((route) => (
          <Menu.SubMenu key={route.key} icon={route.icon} title={route.label}>
            {route.children &&
              route.children.map((childRoute) => (
                <Menu.Item key={childRoute.path}>{childRoute.label}</Menu.Item>
              ))}
          </Menu.SubMenu>
        ))}
        {/* Additional Dropdowns */}
        <Menu.SubMenu key="/Media" icon={<AppstoreOutlined />} title="Media">
          
          <Menu.Item key="/Media/AudioSongs">Audio Songs</Menu.Item>
          <Menu.Item key="/Media/AudioMessage">Audio Messages</Menu.Item>
          <Menu.Item key="/Media/VideoSongs">Video Songs</Menu.Item>
          <Menu.Item key="/Media/VideoMessage">Video Messages</Menu.Item>
          <Menu.Item key="/Media/AlbumComponent">Songs AlbumNames</Menu.Item>
          <Menu.Item key="/Media/FolderManager">Mainfolderaudiomessage</Menu.Item>
          <Menu.Item key="/Media/AlbumComponent">Audiomessagesubfolder</Menu.Item>
          <Menu.Item key="/Media/ContactUs">ContactUs</Menu.Item> 
          <Menu.Item key="/Media/Mainfolderaudiomessage">Mainfolderaudiomessage</Menu.Item>

         
        </Menu.SubMenu>

        <Menu.SubMenu key="/library" icon={<AppstoreOutlined />} title="Library">
          <Menu.Item key="/library/Articals">Articles</Menu.Item>
          <Menu.Item key="/library/Magzine">Magazines</Menu.Item>
          {/* <Menu.Item key="/library/UpdateAudioMessage">UpdateAudioMassage</Menu.Item> */}
        </Menu.SubMenu>
        <Menu.SubMenu key="/managable" icon={<AppstoreOutlined />} title="Managable">
          {/* <Menu.Item key="/managable/payment">Payment</Menu.Item>
           <Menu.Item key="/managable/booking">Booking</Menu.Item> */}
          {/* <Menu.Item key="/managable/Articals">Audio Songs</Menu.Item> */}
          {/* <Menu.Item key="/managable/MusicForm">Audio Messages</Menu.Item> */}
          <Menu.Item key="/managable/UpdateDataComponent">GetAllAudioSongs</Menu.Item>
          <Menu.Item key="/managable/GetAllAudioMessages">GetAllAudioMessages</Menu.Item>
          {/* <Menu.Item key="/managable/Articals">Articals</Menu.Item> */}
          {/* <Menu.Item key="/managable/MusicForm">Magazines</Menu.Item> */}
          {/* <Menu.Item key="/managable/UpdateDataComponent">UpdateAudioSongs</Menu.Item> */}
          <Menu.Item key="/managable/Articals">GetAllVideoSongs</Menu.Item>
          {/* <Menu.Item key="/Managable/UpdateAudioMassage">UpdateAudioMassage</Menu.Item> */}
          {/* <Menu.Item key="/managable/Articals">Video Songs</Menu.Item> */}
          <Menu.Item key="/managable/GetAllVideoMessage">GetAllVideoMessages</Menu.Item>
          {/* <Menu.Item key="/managable/Articals">Video Songs</Menu.Item>
          <Menu.Item key="/managable/MusicForm">update Video Messages</Menu.Item> */}
               <Menu.Item key="/managable/GetAllArticles">GetAllArticles</Menu.Item>
          <Menu.Item key="/managable/GetAllMagazines">GetAllMagzines</Menu.Item>
          <Menu.Item key="/managable/GetAllBanners">GetAllBanners</Menu.Item>
          <Menu.Item key="/managable/GetAllContactUs">GetAllContactUs</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}

export default SideMenu;








