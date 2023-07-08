import { Table, Typography } from "antd";
import { getRecentOrders } from "../../Api";
import { useEffect, useState } from "react";

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    getRecentOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Typography.Title level={4}>orders</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "quantity",
            dataIndex: "quantity",
          },
          {
            title: "total",
            dataIndex: "total",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "discountPercentage",
            dataIndex: "discountPercentage",
            render: (value) => <span>%{value}</span>,
          },
          {
            title: "discountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
        }}
      ></Table>
    </div>
  );
};

export default Orders;
