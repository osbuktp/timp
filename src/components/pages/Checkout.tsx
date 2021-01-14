import { Layout, PageHeader, Form, Input, Select, Button } from "antd";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ICartItem } from "redux/reducer";

const { Content } = Layout;

const Checkout = () => {
  const total = useSelector((store: ICartItem[]) => {
    return store.reduce((acc, curr) => {
      return acc + curr.count * curr.price;
    }, 0);
  });

  const history = useHistory();
  const checkout = useCallback(() => {
    history.push("/final");
  }, []);
  return (
    <Layout>
      <Content>
        <div
          style={{
            margin: "24px",
            padding: "24px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <PageHeader title="Оформление заказа" />
          <Form
            validateTrigger={["onChange", "onSumbit"]}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={checkout}
          >
            <Form.Item
              required
              rules={[{ required: true, message: "Обязательное поле" }]}
              label="ФИО"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              required
              rules={[{ required: true, message: "Обязательное поле" }]}
              label="Телефон"
              name="tel"
            >
              <Input />
            </Form.Item>
            <Form.Item
              required
              rules={[{ required: true, message: "Обязательное поле" }]}
              label="Email"
              name="email"
            >
              <Input />
            </Form.Item>
            <Form.Item
              required
              rules={[{ required: true, message: "Обязательное поле" }]}
              label="Пункт выдачи"
              name="pickpoint"
            >
              <Select>
                <Select.Option value="demo">Пункт выдачи #1</Select.Option>
                <Select.Option value="demo">Пункт выдачи #2</Select.Option>
                <Select.Option value="demo">Пункт выдачи #3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Оформить заказ | {total}₽</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Checkout;
