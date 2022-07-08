import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  title: string;
  description: string;
  material: {
    name: string;
    color: string;
  };
  standard: string;
  price: number;
  credit_balance: number;
  image: string;
};

const responseData: Data[] = [
  {
    title: 'Rappin recycled paper use project in Estonia',
    description:
      'Rappin is an Estonian paper mill located in Räpina, Southern Estonia. Rappin offers carbon negative packaging products like edge protectors and cardboard.',
    material: {
      name: 'Paper',
      color: '#EAD671',
    },
    standard: 'Gold Standard',
    price: 32,
    credit_balance: 102,
    image:
      'https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    title: 'PPS recycled plastic use project in Sweden',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    material: {
      name: 'Plastic',
      color: '#80D3F3',
    },
    standard: 'Verified Carbon Standard',
    price: 45,
    credit_balance: 34,
    image:
      'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  },
  {
    title: 'Saldejums recycled metal use project in Latvia',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    material: {
      name: 'Metal',
      color: '#AEAEAE',
    },
    standard: '',
    price: 30,
    credit_balance: 1045,
    image:
      'https://images.unsplash.com/photo-1649595409877-431bc889b5e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    title: 'Recycled paper use project in Germany',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    material: {
      name: 'Paper',
      color: '#EAD671',
    },
    standard: 'Gold Standard',
    price: 32,
    credit_balance: 102,
    image:
      'https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    title: 'Recycled timber use project in Africa',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    material: {
      name: 'Timber',
      color: '#B1A696',
    },
    standard: 'Gold Standard',
    price: 32,
    credit_balance: 102,
    image:
      'https://images.unsplash.com/photo-1616761286798-69cc206859df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
  },
  {
    title: 'Recycled textile use project in UK',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    material: {
      name: 'Textile',
      color: '#EA9571',
    },
    standard: 'Verified Carbon Standard',
    price: 32,
    credit_balance: 102,
    image:
      'https://images.unsplash.com/photo-1534639077088-d702bcf685e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(responseData);
}
