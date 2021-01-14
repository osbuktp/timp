import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const FinalPage = () => {
  return (
    <Result
      status="success"
      title="Заказ успешно оформлен"
      subTitle="Вы получите уведомление по почте / телефону как только заказ будет подтвержден"
      extra={[
        <Link to="/">
          <Button type="primary" key="console">
            Вернуться на главную
          </Button>
          ,
        </Link>,
      ]}
    />
  );
};

export default FinalPage;
