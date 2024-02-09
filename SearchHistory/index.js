import {Component} from 'react'
import './index.css'
import SearchDetailsList from '../SearchDetailsList/index'

class SearchHistory extends Component {
  render() {
    const {initialHistoryList} = this.props
    return (
      <div className="bg-container">
        <div className="history-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="input-style"
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="search-container">
          <ul className="search-list">
            {initialHistoryList.map(search => (
              <SearchDetailsList
                key={search.id}
                id={search.id}
                timeAccessed={search.timeAccessed}
                logoUrl={search.logoUrl}
                title={search.title}
                domainUrl={search.domainUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SearchHistory
