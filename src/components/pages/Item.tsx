import { Layout } from "antd";
import { Col, Row } from "antd";

const { Content } = Layout;

const ItemPage = () => {
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>Айтем</Col>
          <Col span={6}></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ItemPage;
