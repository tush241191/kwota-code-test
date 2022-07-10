export interface IProject {
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
}
