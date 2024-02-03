function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row mt-5 ">
          <div className="col-4 text-start ps-5 ">
            <img src="./logo2.png"></img>
            <h4 className="mt-3">© 2024 Gnarly! DTI Permit No. 00763520.</h4>
          </div>
          <div className="faq col-4 text-start  ">
            <div className="row footer-font">
              <h4>FAQ</h4>
              <h4>Return & Exchange</h4>
              <h4>Contact Us</h4>
              <h4>Privacy Policy</h4>
              <h4>Terms & Conditions</h4>
            </div>
          </div>
          <div className="faq col-4 text-start">
            <div className="row">
              <h2 className="footer-font">Stay Updated</h2>
              <h5 className="mt-3">
                <strong>Receive exclusive offers and updates</strong>
              </h5>
              <img src="./footer.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
