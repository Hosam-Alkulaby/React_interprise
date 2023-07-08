import {
  BellOutline,
  ChatWrongOutline,
  ClockCircleOutline,
  FaceRecognitionOutline,
  MailOutline,
  SendOutline,
  StopOutline,
} from "antd-mobile-icons";

import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { getComments, getOrders } from "../Api";
import { useEffect, useState } from "react";

interface HeaderProps {}

const AppHeader: React.FC<HeaderProps> = ({}) => {
  const [comments, setComments] = useState<any>(0);
  const [orders, setOrders] = useState<any>(0);
  const [commentsOpen, setcommenstOpen] = useState<boolean>(false);
  const [notificationOpen, setNotificatinOpen] = useState<boolean>(false);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="data:image/jpeg;base64,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"
      ></Image>
      <Typography.Title>Hosam software</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutline
            style={{ fontSize: 24 }}
            onClick={() => {
              setcommenstOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellOutline
            onClick={() => {
              setNotificatinOpen(true);
            }}
            style={{ fontSize: 24 }}
          />
        </Badge>
      </Space>
      <Drawer
        title="comments"
        open={commentsOpen}
        onClose={() => {
          setcommenstOpen(false);
        }}
        maskClosable
      >
        <Space>
          <ClockCircleOutline fontSize={60} />
          <Typography.Title>time left </Typography.Title>
        </Space>

        <Space>
          <ChatWrongOutline fontSize={60} />
          <Typography.Title>so funy </Typography.Title>
        </Space>
        <List
          dataSource={comments}
          renderItem={(item: any) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>

      <Drawer
        title="notifications"
        open={notificationOpen}
        onClose={() => {
          setNotificatinOpen(false);
        }}
        maskClosable
      >
        <Space>
          <FaceRecognitionOutline fontSize={60} />
          <Typography.Title>hosam</Typography.Title>
        </Space>
        <Space>
          <StopOutline fontSize={60} />
          <Typography.Title>warning </Typography.Title>
        </Space>

        <Space>
          <SendOutline fontSize={60} />
          <Typography.Title>send outline </Typography.Title>
        </Space>
        <Space>
          <ChatWrongOutline fontSize={40} />
          <Typography.Text>some issues </Typography.Text>
        </Space>
      </Drawer>
    </div>
  );
};

export default AppHeader;
