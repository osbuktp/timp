import { Button, Layout, PageHeader, Table } from "antd";
import { Link } from "react-router-dom";
import { ICartItem } from "interfaces/common";
import React from "react";

const { Content } = Layout;

interface IColumn {
  title: string;
  dataIndex: string;
  key: string;
  render?: (prop: string) => React.ReactNode;
}

const CoverImage = ({ src }: { src: string }) => (
  <div style={{ width: "160px", height: "90px" }}>
    <img
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      src={src}
      alt="cover"
    />
  </div>
);

const columns: IColumn[] = [
  {
    title: "",
    dataIndex: "src",
    key: "src",
    render: (src) => <CoverImage src={src} />,
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Количество",
    dataIndex: "count",
    key: "count",
  },
];

const data: ICartItem[] = [
  {
    src: "https://uteka.ru/media/big/c/58/c581d934629ceb3674132531ab923c3f.jpg",
    name: "Ибупрофен",
    id: 1,
    price: 100,
    count: 1,
    key: 1,
  },
  {
    src: "https://uteka.ru/media/big/c/58/c581d934629ceb3674132531ab923c3f.jpg",
    name: "Не ибупрофен",
    id: 2,
    price: 200,
    count: 1,
    key: 2,
  },
];

const Summary = (data: ICartItem[]) => {
  const total = data.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);
  return (
    <tr style={{ padding: "24px" }}>
      <td>
        <span>Итого: {total}</span>
      </td>
      <td></td>
      <td></td>
      <td>
        <Link to="/checkout">
          <Button type="primary">Перейти к оформлению</Button>
        </Link>
      </td>
    </tr>
  );
};

const Cart = () => {
  return (
    <Layout>
      <Content>
        <PageHeader title="Корзина" />
        <div style={{ padding: "24px" }}>
          <Table
            summary={Summary}
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Cart;
