import React, { useEffect, useState } from "react";
import { Layout, Menu, PageHeader, Space } from "antd";
import ItemCard from "components/base/ItemCard";
import { Link } from "react-router-dom";
import categories from "static/categories";
import popular from "static/popular";

const { Sider, Content } = Layout;

const Main: React.FC = (props) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const promises = popular.map((id) =>
        fetch(`https://lit-oasis-33894.herokuapp.com/api/products/${id}`)
      );
      const res = await Promise.all(promises);
      const data = await Promise.all(res.map((r) => r.json()));
      setItems(data);
    };

    loadItems();
  }, []);

  return (
    <Layout>
      <Sider
        theme="light"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="light" mode="vertical" defaultSelectedKeys={["4"]}>
          {categories.map((cat, idx) => {
            return (
              <Menu.Item key={idx}>
                <Link to={`/categories/${cat.title}`}>{cat.title}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Content style={{ margin: "24px 16px 0" }}>
        <PageHeader title="Популярные товары" />
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Space wrap size={[16, 16]}>
            {items?.map((item) => {
              return (
                <ItemCard
                  id={item.id}
                  price={item.price}
                  name={item.name}
                  src={item.imageSrc}
                />
              );
            })}
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default Main;
