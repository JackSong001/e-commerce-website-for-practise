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

export interface OrderInfo {
  price: number;
  id: number;
  name: string;
  color: string;
  size: string;
  img: string;
}
