import { Layout, Typography, Divider, Descriptions } from "antd";
const { Content } = Layout;

const { Title, Paragraph } = Typography;

const Contacts = () => {
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
          <Typography>
            <Title>О нас</Title>
            <Title level={2}>Доступные цены</Title>
            <Paragraph>
              Мы сотрудничаем напрямую с производителями, поэтому цены на наши
              товары в среднем ниже, чем в аптеках. Товары поступают в пункт
              доставки напрямую со склада без посредников и перекупщиков, таким
              образом мы поддерживаем доступные цены.
            </Paragraph>
            <Title level={2}>Качественные товары</Title>
            <Paragraph>
              Мы ревностно следим за качеством отпускаемых товаров. Работая
              только с надежными производителями, мы соблюдаем правила хранения
              и транспортировки товаров. Все наши товары имеют необходимые
              лицензии и сертификаты. Salve гарантирует качество отпускаемой
              продукции.
            </Paragraph>
            <Title level={2}>Быстрая доставка</Title>
            <Paragraph>
              Доставка с наших складов обычно происходит уже на следующий день.
              Максимальный срок доставки не превышает трёх дней. После
              формирования заказа сотрудники сервиса оперативно отправляют заказ
              со склада в пункт доставки.
            </Paragraph>
            <Divider />
            <Descriptions title="Наши контакты">
              <Descriptions.Item label="Телефон">
                8-800-555-3535
              </Descriptions.Item>
              <Descriptions.Item label="E-mail">
                clients@salve.ru
              </Descriptions.Item>
              <Descriptions.Item label="Время работы">
                Круглосуточно
              </Descriptions.Item>
            </Descriptions>
          </Typography>
        </div>
      </Content>
    </Layout>
  );
};

export default Contacts;
