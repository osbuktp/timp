import { Layout, PageHeader, Space } from "antd";
import ItemCard from "components/base/ItemCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from "static/categories";

const { Content } = Layout;

interface IParams {
  category: string;
}

const CategoryPage = () => {
  const { category } = useParams<IParams>();
  const parsed = categories.find((cat) => cat.title === category)?.query;
  console.log(category);

  const [items, setItems] = useState<any[]>();

  useEffect(() => {
    const loadItems = async () => {
      const res = await fetch(
        `https://lit-oasis-33894.herokuapp.com/api/categories/${parsed}`
      );
      const data = await res.json();
      setItems(data);
    };

    loadItems();
  }, [category]);

  return (
    <Layout>
      <Content>
        <PageHeader title={category} />
        <div style={{ padding: "24px" }}>
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

export default CategoryPage;
