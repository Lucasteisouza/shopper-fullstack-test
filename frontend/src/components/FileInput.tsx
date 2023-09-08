import { useState } from "react";
import Papa, { ParseResult } from "papaparse";
import { INewProduct } from "../interfaces";


const FileInput = () => {
  const [parsedData, setParsedData] = useState<INewProduct[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Papa.parse(e.target.files![0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: ParseResult<INewProduct>) {
        setParsedData(results.data);

      }
    });
  };

  const handleValidate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(parsedData);
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>placeholder</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FileInput;