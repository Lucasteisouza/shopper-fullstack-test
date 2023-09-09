import { IProduct } from '../interfaces/';

export const fetchByCode = async(code: number) => {
  const response = await fetch(`http://localhost:3001/products/${code}`);
  return await response.json();
};

export const fetchAll = async() => {
  const response = await fetch('http://localhost:3001/products');
  return await response.json();
};

export const fetchAllPacks = async() => {
  const response = await fetch(`http://localhost:3001/packs/`);
  return await response.json();
};

export const putProduct = async(product: IProduct) => {
  const response = await fetch(`http://localhost:3001/products/${product.code}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  return await response.json();
};