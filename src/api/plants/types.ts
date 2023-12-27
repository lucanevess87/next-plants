export type Plant = {
  id: string;
  name: string;
  family: string;
  price: number;
  light: string;
  temperature: string;
  water: string;
  about: string;
  image_url: string;
  type: 'indoor' | 'flower' | 'green';
};
