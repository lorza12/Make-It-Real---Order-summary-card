import "./style.css";


function OrderSum() {
  return (
    <div id="container">
      <header className="principal_image">
        <img id="hero" src="/images/hero.svg" />
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of song, audiobooks, and podcast on any
          device anywhere you like!
        </p>
      </header>
      <div className="plan">
        <div className="music">
          
          <img src="/images/music.svg" />
        </div>
        <div className="annualPlan">
          <p id="plan">Annual Plan</p>
          <p id="price"> $ 59.99/year</p>
        </div>

        <div id="change">
          <button id="ch">Change</button>
        </div>
      </div>

      <footer id="buttoms">
        <button id="btm1">Proceed to Payment</button>
        <button id="btm2">Cancel Order</button>
      </footer>
    </div>
  );
}

export default OrderSum;
