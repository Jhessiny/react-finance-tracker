import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const type = useRef(null);

  const addIncome = (e) => {
    e.preventDefault();
    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
        type: type.current.value,
      },
    ]);
    console.log(type.current.value);

    desc.current.value = "";
    date.current.value = null;
    price.current.value = null;
    type.current.value = null;
  };
  return (
    <form className="income-form" onSubmit={addIncome}>
      <div className="form-inner">
        <input
          ref={desc}
          type="text"
          name="desc"
          id="desc"
          placeholder="Description..."
        />
        <input
          ref={price}
          type="number"
          name="price"
          id="price"
          placeholder="Value"
        />
        <input ref={date} type="date" name="date" id="date" />
        <select ref={type} name="type">
          <option selected value="Income">
            Income
          </option>
          <option value="Expense">Expense</option>
        </select>
        <input type="submit" value="Add" />
      </div>
    </form>
  );
}

export default IncomeForm;
