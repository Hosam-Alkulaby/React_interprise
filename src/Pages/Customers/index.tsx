import { useEffect, useState } from "react";
import { getCustomer } from "../../Api";
import { Avatar, Space, Table, Typography } from "antd";

interface CustomersProps {}

const Customers: React.FC<CustomersProps> = ({}) => {
  const [loading, setLoading] = useState<any>(false);
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    getCustomer().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        columns={[
          {
            title: "Image",
            dataIndex: "image",
            render: (Link) => {
              return <Avatar src={Link} />;
            },
          },
          {
            title: "FirstName",
            dataIndex: "firstName",
          },
          {
            title: "MiddleName",
            dataIndex: "maidenName",
          },
          {
            title: "gender",
            dataIndex: "gender",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Age",
            dataIndex: "age",
          },
          {
            title: "Username",
            dataIndex: "username",
          },
          {
            title: "BirthDate",
            dataIndex: "birthDate",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address},{address.city}
                </span>
              );
            },
          },
        ]}
        loading={loading}
        dataSource={dataSource}
      ></Table>
    </Space>
  );
};

export default Customers;
