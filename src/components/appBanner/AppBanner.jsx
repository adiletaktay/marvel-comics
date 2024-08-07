import "./appBanner.scss"
import avengers from "/img/Avengers.png"
import avengersLogo from "/img/Avengers_logo.png"

const AppBanner = () => {
  return (
    <div className="app__banner">
      <img src={avengers} alt="Avengers" loading="lazy" />
      <div className="app__banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={avengersLogo} alt="Avengers logo" loading="lazy" />
    </div>
  )
}

export default AppBanner
