import { useState } from "react";
import Papa, { ParseResult } from "papaparse";
import { INewProduct, IProduct } from "../interfaces";
import { fetchAll, putProduct } from "../helpers/apiRequests";
import ProductRow from "./ProductRow";


const FileInput = () => {
  const [parsedData, setParsedData] = useState<INewProduct[]>([]);
  const [productsInDB, setProductsInDB] = useState<IProduct[]>([]);
  const [DBisLoaded, setDBisLoaded] = useState<boolean>(false);
  const [validationArray, setValidationArray] = useState<boolean[]>([])

  const fetchfromApi = async () => {
    const products = await fetchAll();
    setProductsInDB(products);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Papa.parse(e.target.files![0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: ParseResult<INewProduct>) {
        setParsedData(results.data);
        const lengthCounter = [];
        for (let i = 0; i < results.data.length; i++) {
          lengthCounter.push(false);
        }
        setValidationArray(lengthCounter);
      }
    });
    fetchfromApi();
  };

  const handleValidate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDBisLoaded(true);
  };
  const cleanUp = () => {
    setParsedData([]);
    setDBisLoaded(false);
    setValidationArray([]);
  };
  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    parsedData.forEach(element => {
      const currentProductData = productsInDB.find((p: IProduct) => p.code === Number(element.product_code));
      if (!currentProductData) {
        return;
      }
      const productToUpdate: IProduct = {
        code: Number(element.product_code),
        name: currentProductData.name,
        sales_price: Number(element.new_price),
        cost_price: currentProductData.cost_price,
      };
      putProduct(productToUpdate);
    });
    cleanUp();
  };

  return (
    <div>
      <form>
        <input
          type="file"
          accept=".csv"
          id="csvFileInput"
          onChange={handleChange}
        />
        <button
          onClick={handleValidate}
        >
          Validar
        </button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço Atual</th>
              <th>Novo Preço</th>
              <th>Validação</th>
            </tr>
          </thead>
          <tbody>
            {DBisLoaded ? parsedData.map((product: INewProduct, index: number) => {
              const currentProduct = productsInDB.find((p: IProduct) => p.code === Number(product.product_code));
              if (currentProduct) {
              return (
                <ProductRow
                  key={product.product_code}
                  product={product} 
                  currentProduct={currentProduct}
                  validationArray={validationArray}
                  indexForValidatorArray={index}
                  setValidationArray={setValidationArray}
                />
              )}
            }): <tr><td>Aguardando arquivo</td></tr> }
          </tbody>
        </table>
        <button
          onClick={handleUpdate}
          disabled={!validationArray.every((e) => e === true)}
        >
          Atualizar cadastros
        </button>
      </div>
    </div>
  )
}

export default FileInput;