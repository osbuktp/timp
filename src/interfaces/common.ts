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
