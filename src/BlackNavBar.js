import Menu from "./menu";

const options = [
  {
    name: "SHOP",
  },
  {
    name: "SALE",
  },
  {
    name: "COLLABORATIONS",
  },
  {
    name: "OUR STORY",
  },
  {
    name: "OUR STORES",
  },
  {
    name: "FAQ",
  },
];

function BlackNavBar() {
  return (
    <div className="blacknavbar">
      <div class="container">
        <div class="row g-3">
          <div class="col-1"></div>
          {options.map((menu) => (
            <Menu menuOptions={menu} key={menu.name} />
          ))}
          <div class="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default BlackNavBar;
