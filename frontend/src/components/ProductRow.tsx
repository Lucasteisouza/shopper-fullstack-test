import { INewProduct, IProduct } from "../interfaces";
import { useState, useEffect } from "react";

function ProductRow(props:{ 
  product: INewProduct,
  currentProduct: IProduct,
  validationArray: boolean[],
  setValidationArray: React.Dispatch<React.SetStateAction<boolean[]>>,
  indexForValidatorArray: number}) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<string>('');

  useEffect(() => {
    validate();
  },[]);

  const validate = () => {
    if (props.currentProduct.cost_price >= Number(props.product.new_price)) {
      setErrorType('Preço atual maior que o preço de custo');
      return;
    }
    if (props.currentProduct.sales_price >= Number(props.product.new_price) * 1.1
      || props.currentProduct.sales_price <= Number(props.product.new_price) * 0.9) {
      setErrorType('Novo preço fora da margem de 10%');
      return;
    }
    setIsValid(true);
    props.validationArray[props.indexForValidatorArray] = true;
    props.setValidationArray([...props.validationArray]);
  }

  return (
    <tr>
      <td>{props.currentProduct.code}</td>
      <td>{props.currentProduct.name}</td>
      <td>{props.currentProduct.sales_price}</td>
      <td>{props.product.new_price}</td>
      <td>{isValid? 'Entrada valida' : errorType}</td>
    </tr>
  )
}

export default ProductRow