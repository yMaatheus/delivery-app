import React from 'react';

function CheckoutForm() {
  return (
    <div>
      <form>
        <label htmlFor="seller">
          Vendedor(a) Responsável
          <select>
            <option value="0" key="0">
              Selecione o Vendedor
            </option>
          </select>
        </label>
        <label htmlFor="seller">
          Endereço
          <input type="text" id="seller" />
        </label>
        <label htmlFor="seller">
          Número
          <input type="number" id="seller" />
        </label>
      </form>
    </div>
  );
}

export default CheckoutForm;
