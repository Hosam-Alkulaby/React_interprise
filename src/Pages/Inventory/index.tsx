import { useEffect, useState } from "react";
import { getInventory } from "../../Api";
import { Avatar, Rate, Space, Table, Typography } from "antd";

interface InventoryProps {}

const Inventory: React.FC<InventoryProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (Link) => {
              return <Avatar src={Link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: " Category",
            dataIndex: "category",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
      ></Table>
    </Space>
  );
};

export default Inventory;
