import VehicleArt from './VehicleArt'

function StatusBar() {
  return (
    <div className="phone-status">
      <span>9:41</span>
      <i />
    </div>
  )
}

function Screen({ id }) {
  if (id === 'booking') {
    return (
      <div className="screen">
        <StatusBar />
        <p className="screen-kicker">New delivery</p>
        <h3>Where to?</h3>
        <div className="field">
          <b /> Pickup · Navrangpura
        </div>
        <div className="field is-drop">
          <b /> Drop · Satellite
        </div>
        <div className="screen-btn">Continue</div>
      </div>
    )
  }
  if (id === 'vehicle') {
    return (
      <div className="screen">
        <StatusBar />
        <p className="screen-kicker">Vehicle</p>
        <h3>Choose one</h3>
        <div className="choice is-on">
          <VehicleArt type="bike" />
          <span>Bike</span>
        </div>
        <div className="choice">
          <span>Mini Truck</span>
        </div>
      </div>
    )
  }
  if (id === 'review') {
    return (
      <div className="screen">
        <StatusBar />
        <p className="screen-kicker">Review</p>
        <h3>Your trip</h3>
        <ul className="review-list">
          <li>
            <span>From</span> Navrangpura
          </li>
          <li>
            <span>To</span> Satellite
          </li>
          <li>
            <span>Vehicle</span> Bike
          </li>
          <li>
            <span>Payment</span> Shown at confirm
          </li>
        </ul>
        <div className="screen-btn">Confirm delivery</div>
      </div>
    )
  }
  if (id === 'payment') {
    return (
      <div className="screen">
        <StatusBar />
        <p className="screen-kicker">Payment</p>
        <h3>How to pay</h3>
        <div className="pay is-on">UPI</div>
        <div className="pay">Card</div>
        <div className="pay">Cash, if offered</div>
        <p className="screen-note">Only methods shown here apply to this booking.</p>
      </div>
    )
  }
  if (id === 'rider') {
    return (
      <div className="screen">
        <StatusBar />
        <p className="screen-kicker">Assigned</p>
        <h3>Partner matched</h3>
        <div className="rider">
          <span>IU</span>
          <div>
            <strong>Delivery partner</strong>
            <em>Heading to pickup</em>
          </div>
        </div>
        <div className="field">Navrangpura</div>
      </div>
    )
  }
  return (
    <div className="screen">
      <StatusBar />
      <p className="screen-kicker">Live status</p>
      <h3>On the way</h3>
      <ol className="track">
        <li className="is-done">Pickup confirmed</li>
        <li className="is-done">Vehicle assigned</li>
        <li className="is-now">On the way</li>
        <li>Delivered</li>
      </ol>
    </div>
  )
}

export default function PhoneMock({ screen }) {
  return (
    <article className="phone">
      <div className="phone-bezel">
        <Screen id={screen.id} />
      </div>
      <p className="phone-step">{screen.step}</p>
      <h3>{screen.title}</h3>
      <p>{screen.caption}</p>
    </article>
  )
}
