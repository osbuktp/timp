import React, { useEffect, useState } from "react";
import { Layout, PageHeader, Space } from "antd";
import ItemCard from "components/base/ItemCard";
import popular from "static/popular";

const { Content } = Layout;

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
    <Content>
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
  );
};

export default Main;
