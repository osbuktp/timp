import { Card } from "antd";
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  src: string;
  name: string;
  price: number;
}

const Cover = ({ src, name }: { src: string; name: string }) => {
  return (
    <div style={{ width: "320px", height: "180px" }}>
      <img
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        width={"320px"}
        height={"180px"}
        src={src}
        alt={name}
      />
    </div>
  );
};

const ItemCard = ({ id, src, name, price }: IProps) => {
  return (
    <Link to={`/item/${id}`}>
      <Card hoverable cover={<Cover src={src} name={name} />}>
        <Card.Meta title={name} description={`${price} ₽`} />
      </Card>
    </Link>
  );
};

export default ItemCard;
