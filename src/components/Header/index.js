import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'

import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {ImCross} from 'react-icons/im'

import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
    showSearchBar: false,
    searchValue: '',
  }

  componentDidMount() {
    this.det()
  }

  det = () => {
    const {match} = this.props
    const {url} = match
    // console.log(path)
    // console.log(url)
    if (url === '/search') {
      this.setState({showSearchBar: true})
    } else {
      this.setState({showSearchBar: false})
    }
  }

  onClickShowMenu = () => {
    this.setState({showMenu: true})
  }

  onClickHideMenu = () => {
    this.setState({showMenu: false})
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  onclickSearch = () => {
    const {searchValue} = this.state
    const {searchInput} = this.props
    searchInput(searchValue)
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.props
    if (event.key === 'Enter') {
      searchInput(event.target.value)
    }
  }

  render() {
    const {showMenu, showSearchBar, searchValue} = this.state
    const {match} = this.props
    const {path} = match
    let homeClassNameStyling
    let popularClassNameStyling
    let accountClassNameStyling

    switch (path) {
      case '/popular':
        homeClassNameStyling = 'passive'
        popularClassNameStyling = 'active'
        accountClassNameStyling = 'passive'
        break
      case '/account':
        homeClassNameStyling = 'passive'
        popularClassNameStyling = 'passive'
        accountClassNameStyling = 'active'
        break
      default:
        homeClassNameStyling = 'active'
        popularClassNameStyling = 'passive'
        accountClassNameStyling = 'passive'
        break
    }

    return (
      <nav className="nav-container">
        <div className="nav-elements-container">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dblz7twzy/image/upload/v1702723662/Group_7399login-logo_kxsoci.png"
              className="app-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-list-items">
            <Link to="/" className="nav-link">
              <li className={`popup-heading ${homeClassNameStyling}`}>Home</li>
            </Link>
            <Link to="/popular" className="nav-link">
              <li className={`popup-heading ${popularClassNameStyling}`}>
                Popular
              </li>
            </Link>
          </ul>
          <div className="search-container">
            {showSearchBar && (
              <div className="barAndIcon">
                <input
                  type="search"
                  value={searchValue}
                  onKeyDown={this.onChangeSearchInput}
                  onChange={this.onChangeSearchValue}
                  placeholder="search"
                  className="search"
                />
                <button
                  type="button"
                  testid="searchButton"
                  className="barAndIcon-but"
                  onClick={this.onclickSearch}
                >
                  <HiOutlineSearch
                    size={20}
                    color="white"
                    testid="searchButton"
                  />
                </button>
              </div>
            )}
            {!showSearchBar && (
              <Link to="/search">
                <button type="button" className="icon-button" testid="searchButton">
                  <HiOutlineSearch
                    size={20}
                    color="white"
                    testid="searchButton"
                  />
                </button>
              </Link>
            )}

            <Link to="/account">
              <img
                src="https://res.cloudinary.com/dblz7twzy/image/upload/v1702794751/Avatarhome-avtar_dgfpfq.png"
                className={`profile-logo ${accountClassNameStyling}`}
                alt="profile"
              />
            </Link>
            <MdMenuOpen
              size={25}
              color="white"
              className="menu-icon"
              onClick={this.onClickShowMenu}
            />
          </div>
        </div>
        {showMenu && (
          <div>
            <ul className="list-mini">
              <Link to="/" className="nav-link">
                <li className={`popup-heading ${homeClassNameStyling}`}>
                  Home
                </li>
              </Link>
              <Link to="/popular" className="nav-link">
                <li className={`popup-heading ${popularClassNameStyling}`}>
                  Popular
                </li>
              </Link>

              <Link to="/account" className="nav-link">
                <li className={`popup-heading ${accountClassNameStyling}`}>
                  Account
                </li>
              </Link>
              <ImCross
                size={10}
                color="#ffffff"
                onClick={this.onClickHideMenu}
                className="icon"
              />
            </ul>
          </div>
        )}
      </nav>
    )
  }
}

export default withRouter(Header)
