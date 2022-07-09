import { IProject } from './Project';

const base: IProject = {
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
};

export const mockProjectProps = {
  base,
};
