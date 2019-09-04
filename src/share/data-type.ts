export interface Account {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: number;
  bod: number;
}

export interface Product {
  name: string; // ronda-black
  brandName: string; //The Ronda Top
  price: number;
  color: Color[];
  size: string[];
  description: string;
  imgList: string[];
}

export interface Color {
  name: string;
  color: string; // #225225225
  link: string;
}

export interface Order {
  price: number;
  name: string;
  color: string;
  size: string;
  img: string;
}

export interface OrderList {
  email: string;
  date: number;
  price: number;
  orders: Order[];
}

export interface State {
  name: string;
  abbreviation: string;
}