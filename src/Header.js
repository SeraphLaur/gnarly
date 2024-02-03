import Basket from "./Basket";
import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <div>
        <img src="./logo.png" alt="logo" />

        <Search />
        <Basket />
      </div>
    </div>
  );
}

export default Header;
