import Shirts from "./Shirts";
import Sold from "./Sold";
const shirtslist = [
  {
    name: "GRAV GLIDER",
    price: "₱550",
    origPrice: "₱650",
    img: "gravglider.png",
  },
  {
    name: "CIRCUIT BUZZ",
    price: "₱550",
    origPrice: "₱650",
    img: "circuitbuzz.png",
  },
  {
    name: "BUZZ CIRCUIT",
    price: "₱550",
    origPrice: "₱650",
    img: "buzzcircuit.png",
  },
  {
    name: "PILLAR",
    price: "₱550",
    origPrice: "₱650",
    img: "pillar.png",
  },
  {
    name: "SCANNED",
    price: "₱630",
    origPrice: "₱750",
    img: "scanned.png",
  },
  {
    name: "WORRY FREE",
    price: "₱550",
    origPrice: "₱650",
    img: "worryfree.png",
  },
  {
    name: "SS SHIFTY",
    price: "₱720",
    origPrice: "₱850",
    img: "ssshifty.png",
  },
  {
    name: "YAM L/S",
    price: "₱1050",
    origPrice: "₱1250",
    img: "yamls.png",
  },
  {
    name: "PINE GREEN L/S",
    price: "₱1,050",
    origPrice: "₱1,250",
    img: "pinegreenls.png",
  },
];

const soldlist = [
  {
    name: "SWEEP EMBRO",
    img: "sweepembro.png",
  },
  {
    name: "RIFF OUT",
    img: "riffout.png",
  },
];

function Product() {
  return (
    <div className="container-fluid mb-5">
      <div class="row px-5">
        <div class="col-sm text-start">
          <h4>
            <strong>Filter</strong>
          </h4>
        </div>
        <div class="col-sm text-center">
          <h4>9 products</h4>
        </div>
        <div class="col-sm text-end">
          <h4>
            <strong>Featured</strong>
          </h4>
        </div>
      </div>

      <div class="row px-5">
        {shirtslist.map((shirts) => (
          <Shirts key={shirts.name} shirtsss={shirts} />
        ))}
        {soldlist.map((shirts) => (
          <Sold key={shirts.name} shirtsss={shirts} />
        ))}
      </div>
    </div>
  );
}

export default Product;
