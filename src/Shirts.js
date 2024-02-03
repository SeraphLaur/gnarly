function Shirts(props) {
  return (
    <div className="col-3 mt-3">
      <div class="card card-color border-5 rounded-0 text-center">
        <img class="card-img-top" src={props.shirtsss.img} alt="shirt" />
        <div class="card-body card-color text-white">
          <div class="card-title card-title-font">{props.shirtsss.name}</div>
          <div class="card-text">
            <span className="card-title-price">{props.shirtsss.price}</span>
            <span className="card-title-orig">
              <strike>{props.shirtsss.origPrice}</strike>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shirts;
