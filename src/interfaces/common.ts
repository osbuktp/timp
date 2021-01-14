// export interface IItem {
//   id: string;
//   name: string;
//   imageSrc: string;
//   agent: string;
//   price: number;
//   brand: string;
//   country: string;
//   specifications: string[];
//   categories: string[];
// }

export interface ICartItem {
  src: string;
  id: number;
  price: number;
  count: number;
  name: string;
  key: number;
}

export interface IClientInfo {
  name: string;
  tel: string;
}

export interface ICart {
  id: number;
  pickUpPointId: number;
  items: ICartItem[];
  client: IClientInfo;
}
