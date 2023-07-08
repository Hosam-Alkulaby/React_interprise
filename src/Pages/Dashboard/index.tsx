import { Card, Space, Statistic, Table, Typography } from "antd";
import {
  AppOutline,
  MailOpenOutline,
  SendOutline,
  ShopbagOutline,
} from "antd-mobile-icons";

import { useEffect, useState } from "react";
import { getOrders, getReventue } from "../../Api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardProps {}
interface AppProps {
  title: any;
  value: any;
  icon: any;
}

interface RecentOrder {
  title: string;
}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <MailOpenOutline
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.5)",
                borderRadius: 20,
                fontSize: 40,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={300}
        />
        <DashboardCard
          icon={
            <SendOutline
              style={{
                color: "yellow",
                backgroundColor: "rgba(255,0,0,0.2)",
                borderRadius: 20,
                fontSize: 40,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={273}
        />
        <DashboardCard
          icon={
            <ShopbagOutline
              style={{
                color: "red",
                backgroundColor: "rgba(0,255,0,20",
                borderRadius: 20,
                fontSize: 40,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={1235}
        />
        <DashboardCard
          icon={
            <AppOutline
              style={{
                color: "green",
                backgroundColor: "rgba(0,0,0,0.14)",
                borderRadius: 20,
                fontSize: 40,
                padding: 8,
              }}
            />
          }
          title={"Dashboard"}
          value={6354}
        />
      </Space>
      <Space>
        <RecentOrder />
        <Dashboardchart />
      </Space>
    </Space>
  );
};

function DashboardCard(props: AppProps) {
  return (
    <Card>
      <Space direction="horizontal">
        {props.icon}
        <Statistic title={props.title} value={props.value} />
      </Space>
    </Card>
  );
}

function RecentOrder() {
  const [datasource, SetDataSource] = useState<any>([]);
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    setloading(true);
    getOrders().then((res) => {
      SetDataSource(res.products.slice(0, 3));
      setloading(false);
    });
  }, []);

  return (
    <div>
      <Typography.Text>recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "title",
            dataIndex: "title",
          },
          {
            title: "price",
            dataIndex: "price",
          },
          {
            title: "quantity",
            dataIndex: "quantity",
          },
          {
            title: "discountedPrice",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={datasource}
        pagination={false}
      ></Table>
    </div>
  );
}

export function Dashboardchart() {
  const [revenuedata, setrevenuedata] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getReventue().then((res) => {
      const label = res.carts.map((cart: any) => {
        return `user-${cart.userId}`;
      });

      const data = res.carts.map((cart: any) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setrevenuedata(dataSource);
    });
  }, []);

  const options: object = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  const labels: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenuedata} />
    </Card>
  );
}

export default Dashboard;
