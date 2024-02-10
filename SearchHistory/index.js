import {Component} from 'react'
import './index.css'
import SearchDetailsList from './Components/SearchHistory/index'

class SearchHistory extends Component {
  state = {
    searchInput: '',
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchedHistory = initialHistoryList.filter(each =>
      each.title.includes(searchInput),
    )
    let historyView
    if (searchedHistory.length === 0) {
      historyView = (
        <div className="without-history">
          <p className="no-history">There is no history to show</p>
        </div>
      )
    } else {
      historyView = (
        <div className="search-container">
          <ul className="search-list">
            {searchedHistory.map(search => (
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
      )
    }

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
              value={searchInput}
            />
          </div>
        </div>
        {historyView}
      </div>
    )
  }
}
export default SearchHistory
