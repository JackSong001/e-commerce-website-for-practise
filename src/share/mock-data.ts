import { Account } from './data-type';
import { Product} from './data-type';
import { bindCallback } from 'rxjs';

export const Products: Product[] = [
  {
    id: 1,
    name: 'ronda-black',
    brandName: 'The Ronda Top',
    price: 75,
    color:[
      {name: 'black', color: '#3e3f40', link: 'ronda-black'},
      {name: 'dark-spruce', color: '#183840', link: 'ronda-dark-spruce'},
      {name: 'ivory', color: '#edebe6', link: 'ronda-ivory'}
    ],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Meet your new go-to underpinning, crafted from a lightweight, machine-washable fabric that will keep you cool through the warm months. An elegant V-neck frames the collarbones, while a rounded front hem balances a longer square hem in back (and can be worn tucked in or out). Note the snaps at the shoulders—designed to keep your bra straps in place, whether you wear the Ronda under a blazer or on its own.',
    // tslint:disable-next-line: max-line-length
    imgList: ['20180611_rondatop_black__hero.webp', '20180611_rondatop_black__side.webp', '20180611_rondatop_black__front.webp', '20180611_rondatop_black__back.webp', '20180611_rondatop_black__detail.webp']
  },
  {
    id: 2,
    name: 'ronda-black',
    brandName: 'The Ronda Top',
    price: 75,
    color:[
      {name: 'black', color: '#3e3f40', link: 'ronda-black'},
      {name: 'dark-spruce', color: '#183840', link: 'ronda-dark-spruce'},
      {name: 'ivory', color: '#edebe6', link: 'ronda-ivory'}
    ],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Meet your new go-to underpinning, crafted from a lightweight, machine-washable fabric that will keep you cool through the warm months. An elegant V-neck frames the collarbones, while a rounded front hem balances a longer square hem in back (and can be worn tucked in or out). Note the snaps at the shoulders—designed to keep your bra straps in place, whether you wear the Ronda under a blazer or on its own.',
    // tslint:disable-next-line: max-line-length
    imgList: ['20180611_rondatop_black__hero.webp', '20180611_rondatop_black__side.webp', '20180611_rondatop_black__front.webp', '20180611_rondatop_black__back.webp', '20180611_rondatop_black__detail.webp']
  },
  {
    id: 3,
    name: 'ronda-black',
    brandName: 'The Ronda Top',
    price: 75,
    color:[
      {name: 'black', color: '#3e3f40', link: 'ronda-black'},
      {name: 'dark-spruce', color: '#183840', link: 'ronda-dark-spruce'},
      {name: 'ivory', color: '#edebe6', link: 'ronda-ivory'}
    ],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Meet your new go-to underpinning, crafted from a lightweight, machine-washable fabric that will keep you cool through the warm months. An elegant V-neck frames the collarbones, while a rounded front hem balances a longer square hem in back (and can be worn tucked in or out). Note the snaps at the shoulders—designed to keep your bra straps in place, whether you wear the Ronda under a blazer or on its own.',
    // tslint:disable-next-line: max-line-length
    imgList: ['20180611_rondatop_black__hero.webp', '20180611_rondatop_black__side.webp', '20180611_rondatop_black__front.webp', '20180611_rondatop_black__back.webp', '20180611_rondatop_black__detail.webp']
  },
  {
    id: 4,
    name: 'ronda-black',
    brandName: 'The Ronda Top',
    price: 75,
    color:[
      {name: 'black', color: '#3e3f40', link: 'ronda-black'},
      {name: 'dark-spruce', color: '#183840', link: 'ronda-dark-spruce'},
      {name: 'ivory', color: '#edebe6', link: 'ronda-ivory'}
    ],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Meet your new go-to underpinning, crafted from a lightweight, machine-washable fabric that will keep you cool through the warm months. An elegant V-neck frames the collarbones, while a rounded front hem balances a longer square hem in back (and can be worn tucked in or out). Note the snaps at the shoulders—designed to keep your bra straps in place, whether you wear the Ronda under a blazer or on its own.',
    // tslint:disable-next-line: max-line-length
    imgList: ['20180611_rondatop_black__hero.webp', '20180611_rondatop_black__side.webp', '20180611_rondatop_black__front.webp', '20180611_rondatop_black__back.webp', '20180611_rondatop_black__detail.webp']
  },
  {
    id: 5,
    name: 'ronda-black',
    brandName: 'The Ronda Top',
    price: 75,
    color:[
      {name: 'black', color: '#3e3f40', link: 'ronda-black'},
      {name: 'dark-spruce', color: '#183840', link: 'ronda-dark-spruce'},
      {name: 'ivory', color: '#edebe6', link: 'ronda-ivory'}
    ],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Meet your new go-to underpinning, crafted from a lightweight, machine-washable fabric that will keep you cool through the warm months. An elegant V-neck frames the collarbones, while a rounded front hem balances a longer square hem in back (and can be worn tucked in or out). Note the snaps at the shoulders—designed to keep your bra straps in place, whether you wear the Ronda under a blazer or on its own.',
    // tslint:disable-next-line: max-line-length
    imgList: ['20180611_rondatop_black__hero.webp', '20180611_rondatop_black__side.webp', '20180611_rondatop_black__front.webp', '20180611_rondatop_black__back.webp', '20180611_rondatop_black__detail.webp']
  },
]

export const Accounts: Account[] = [
  {
    emailAdd: 'xsong120394@gmail.com',
    password: '123456',
    firstName: 'xuxin',
    lastName: 'song',
    company: 'this is a company',
    street: 'this is a street',
    apt: '1234',
    country: 'usa',
    state: 'NJ',
    city: 'city',
    zip: 123456,
    telephone: 1231231122
  },
  {
    emailAdd: 'test@test.com',
    password: '123456',
    firstName: 'xuxin',
    lastName: 'song',
    company: 'this is a company',
    street: 'this is a street',
    apt: '1234',
    country: 'usa',
    state: 'NJ',
    city: 'city',
    zip: 123456,
    telephone: 1231231122
  },
];
