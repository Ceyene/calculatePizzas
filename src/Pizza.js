import React, { useState } from "react";
import "./styles.css";

export default function Pizza() {
  const [pizza, setPizza] = useState({
    invitados: 0,
    porciones: 0,
    pizzas: 0
  });

  const handlePizzas = (e) => {
    const { name, value } = e.target;
    const newPizza = { ...pizza, [name]: value };
    setPizza(newPizza);

    console.log(pizza);
  };

  const resetPizzas = () => {
    const newPizza = {
      invitados: 0,
      porciones: 0,
      pizzas: 0
    };

    setPizza(newPizza);
    console.log(pizza);
  };

  return (
    <div className="frame">
      <div className="calcPizza">
        <label>
          Invitadxs:{" "}
          <input
            type="number"
            autoComplete="off"
            name="invitados"
            value={pizza.invitados}
            onChange={handlePizzas}
            placeholder="Invitadxs"
          />
        </label>{" "}
        <br />
        <label>
          Porciones x persona:{" "}
          <input
            type="number"
            autoComplete="off"
            name="porciones"
            value={pizza.porciones}
            onChange={handlePizzas}
            placeholder="Porciones"
          />
        </label>
        <p className="pizzasNeeded">
          Necesitarás{" "}
          <span> {Math.ceil((pizza.invitados * pizza.porciones) / 8)} </span>{" "}
          pizzas
        </p>
        <button onClick={resetPizzas} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}
