import Shirts from "./Shirts";
const shirtslist = [
  {
    name: "GRAV GLIDER",
    price: "₱550",
    origPrice: "₱650",
    quantity: 5,
    isFeatured: false,
    img: "gravglider.png",
    altimg: "altgravglider.png",
  },
  {
    name: "CIRCUIT BUZZ",
    price: "₱550",
    origPrice: "₱650",
    quantity: 5,
    isFeatured: false,
    img: "circuitbuzz.png",
    altimg: "altcircuitbuzz.png",
  },
  {
    name: "BUZZ CIRCUIT",
    price: "₱550",
    origPrice: "₱650",
    quantity: 5,
    isFeatured: true,
    img: "buzzcircuit.png",
    altimg: "altbuzzcircuit.png",
  },
  {
    name: "PILLAR",
    price: "₱550",
    origPrice: "₱650",
    quantity: 5,
    isFeatured: false,
    img: "pillar.png",
    altimg: "altpillar.png",
  },
  {
    name: "SCANNED",
    price: "₱630",
    isFeatured: true,
    origPrice: "₱750",
    quantity: 5,
    img: "scanned.png",
    altimg: "altscanned.png",
  },
  {
    name: "WORRY FREE",
    price: "₱550",
    origPrice: "₱650",
    quantity: 5,
    isFeatured: false,
    img: "worryfree.png",
    altimg: "altworryfree.png",
  },
  {
    name: "SS SHIFTY",
    price: "₱720",
    origPrice: "₱850",
    quantity: 5,
    isFeatured: false,
    img: "ssshifty.png",
    altimg: "altssshifty.png",
  },
  {
    name: "YAM L/S",
    price: "₱1050",
    origPrice: "₱1250",
    quantity: 5,
    isFeatured: true,
    img: "yamls.png",
    altimg: "yamls.png",
  },
  {
    name: "PINE GREEN L/S",
    price: "₱1,050",
    origPrice: "₱1,250",
    quantity: 0,
    isFeatured: true,
    img: "pinegreenls.png",
    altimg: "pinegreenls.png",
  },
  {
    name: "SWEEP EMBRO",
    price: "₱1,050",
    origPrice: "₱1,250",
    quantity: 0,
    isFeatured: false,
    img: "sweepembro.png",
    altimg: "sweepembro.png",
  },
  {
    name: "RIFF OUT",
    origPrice: "₱1,250",
    origPrice: "₱1,250",
    quantity: 0,
    isFeatured: true,
    img: "riffout.png",
    altimg: "riffout.png",
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
      </div>
    </div>
  );
}

export default Product;
