import React from "react";

function IncomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        x
      </button>
      <div className="desc">{income.desc}</div>
      <div
        className={`type  ${income.type == "Income" ? "income" : "expense"}`}
      >
        {income.type}
      </div>
      <div
        className={`price ${income.type == "Income" ? "income" : "expense"}`}
      >
        R${income.price}
      </div>
      <div className="date">{`${day}/${month}/${year}`}</div>
    </div>
  );
}

export default IncomeItem;
