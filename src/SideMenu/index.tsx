import { Menu } from "antd";

import {
  AppstoreOutline,
  ShopbagOutline,
  UserOutline,
} from "antd-mobile-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = ({}) => {
  const [selectedKeys, setSelectedKeys] = useState("/");
  const navigate = useNavigate();
  useEffect(() => {
    const pathname = location.pathname;
    setSelectedKeys(pathname);
  }, [location.pathname]);
  return (
    <div className="SideMenu">
      <Menu
        mode="vertical"
        className="SideMenuvertical"
        selectedKeys={[selectedKeys]}
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreOutline />,
          },
          {
            label: "inventory",
            key: "/Inventory",
            icon: <ShopbagOutline />,
          },
          {
            label: "Oders",
            key: "/Orders",
            icon: <ShopbagOutline />,
          },
          {
            label: "Customers",
            key: "/Customers",
            icon: <UserOutline />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
