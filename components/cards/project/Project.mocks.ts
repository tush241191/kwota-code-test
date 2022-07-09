import { IProject } from './Project';

const base: IProject = {
  title: '',
  description: '',
  material: {
    name: '',
    color: '',
  },
  standard: '',
  price: 0,
  credit_balance: 0,
  image: '',
};

export const mockProjectProps = {
  base,
};
