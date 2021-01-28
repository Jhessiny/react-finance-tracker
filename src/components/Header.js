const Header = ({ totalIncome }) => {
  return (
    <header>
      <h1>Finance Tracker</h1>
      <div className="total-income">R${totalIncome}</div>
    </header>
  );
};

export default Header;
