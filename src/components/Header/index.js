import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <img
        src="https://res.cloudinary.com/debrk14uy/image/upload/v1713351895/music_1x_wtcjng.png"
        alt="headerImg"
      />
      <span>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://res.cloudinary.com/debrk14uy/image/upload/v1714566996/logout_ftbi0u.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>

        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </span>
    </nav>
  )
}
export default withRouter(Header)
