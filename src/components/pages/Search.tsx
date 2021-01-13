import { Layout, PageHeader, Space } from "antd";
import ItemCard from "components/base/ItemCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { Content } = Layout;

interface IParams {
  query: string;
}

const SearchPage = () => {
  const { query } = useParams<IParams>();

  const [items, setItems] = useState<any[]>();

  useEffect(() => {
    const loadItems = async () => {
      const res = await fetch(
        `https://lit-oasis-33894.herokuapp.com/api/search/${query}`
      );
      const data = await res.json();
      setItems(data);
    };

    loadItems();
  }, [query]);

  return (
    <Layout>
      <Content>
        <PageHeader title="Поиск" />
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

export default SearchPage;
