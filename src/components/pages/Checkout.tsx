import { Layout, PageHeader, Form, Input, Select, Button } from "antd";
import React from "react";

const { Content } = Layout;

const Checkout = () => {
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
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
          >
            <Form.Item label="ФИО">
              <Input />
            </Form.Item>
            <Form.Item label="Телефон">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="Пункт выдачи">
              <Select>
                <Select.Option value="demo">Пункт выдачи #1</Select.Option>
                <Select.Option value="demo">Пункт выдачи #2</Select.Option>
                <Select.Option value="demo">Пункт выдачи #3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Button">
              <Button>Оформить заказ</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Checkout;
