import { Layout, PageHeader, Descriptions, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { Content } = Layout;

interface IParams {
  id: string;
}

const ItemPage = () => {
  const { id } = useParams<IParams>();
  const [item, setItem] = useState<any>();
  useEffect(() => {
    const loadItems = async () => {
      const res = await fetch(
        `https://lit-oasis-33894.herokuapp.com/api/products/${id}`
      );
      const data = await res.json();
      console.log(data);
      setItem(data);
    };

    loadItems();
  }, [id]);

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
          <PageHeader title={item?.name} />
          <div
            style={{
              padding: "24px",
              paddingBottom: "48px",
              display: "grid",
              columnGap: "24px",
              gridAutoFlow: "column",
              gridTemplateColumns: "320px 1fr",
            }}
          >
            <div>
              <img
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                src={item?.imageSrc}
                alt=""
              />
              <Button type="primary">
                {item?.price}₽ | Добавить в корзину
              </Button>
            </div>
            <div style={{ padding: "24px" }}>
              <Descriptions column={1} title={"О товаре"}>
                <Descriptions.Item label="Наименование">
                  {item?.name}
                </Descriptions.Item>
                <Descriptions.Item label="Действующее вещество">
                  {item?.agent}
                </Descriptions.Item>
                <Descriptions.Item label="Производитель">
                  {item?.brand}
                </Descriptions.Item>
                <Descriptions.Item label="Страна-производитель">
                  {item?.country}
                </Descriptions.Item>
                <Descriptions.Item label="Категории">
                  {item?.categories?.join(" / ")}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ItemPage;
