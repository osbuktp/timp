import { Button, Layout, PageHeader, Table, InputNumber, Space } from "antd";
import { Link } from "react-router-dom";
import { ICartItem, changeCount, removeFromCart } from "redux/reducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      src={src}
      alt="cover"
    />
  </div>
);

const CartControls = ({ id }: { id: string }) => {
  const item = useSelector((store: ICartItem[]) => {
    return store.find((el) => el.id === id);
  });
  const dispatch = useDispatch();
  return (
    <Space>
      <InputNumber
        defaultValue={item!.count}
        min={1}
        onStep={(value) =>
          dispatch(changeCount({ id: item!.id, count: value }))
        }
      />
      <Button onClick={() => dispatch(removeFromCart(item!.id))} danger>
        Удалить
      </Button>
    </Space>
  );
};

const columns: IColumn[] = [
  {
    title: "",
    dataIndex: "imageSrc",
    key: "imageSrc",
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
    dataIndex: "id",
    key: "id",
    render: (id) => <CartControls id={id} />,
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
  const data = useSelector((state: ICartItem[]) => state).map((item) => ({
    ...item,
    key: item.id,
  }));
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
