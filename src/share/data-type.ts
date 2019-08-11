export interface Account {
  emailAdd: string;
  password: string;
  firstName: string;
  lastName: string;
  telephone: number;
  company: string;
  street: string;
  apt: string;
  country: string;
  state: string;
  city: string;
  zip: number;
}

export interface Address {
  company: string;
  street: string;
  apt: string;
  country: string;
  state: string;
  city: string;
  zip: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  color: string[];
  size: string[];
  description: string;
  imgList: string[];
}

export interface OrderInfo {
  price: number;
  id: number;
  name: string;
  color: string;
  size: string;
  img: string;
}
