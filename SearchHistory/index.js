import {Component} from 'react'
import './index.css'
import SearchDetailsList from '../SearchDetailsList/index'

class SearchHistory extends Component {
  state = {
    searchInput: '',
    history: [],
  }

  onchangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteSearch = id => {
    const {history} = this.state
    const afterDeleted = history.filter(search => search.id !== id)
    this.setState({
      history: afterDeleted,
    })
  }

  render() {
    const {searchInput} = this.state
    let {history} = this.state
    const {initialHistoryList} = this.props
    history = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let historyView
    if (history.length === 0) {
      historyView = (
        <div className="without-history">
          <p className="no-history">There is no history to show</p>
        </div>
      )
    } else {
      historyView = (
        <div className="search-container">
          <ul className="search-list">
            {history.map(search => (
              <SearchDetailsList
                key={search.id}
                id={search.id}
                timeAccessed={search.timeAccessed}
                logoUrl={search.logoUrl}
                title={search.title}
                domainUrl={search.domainUrl}
                deleteSearch={this.deleteSearch}
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
              onChange={this.onchangeSearchInput}
            />
          </div>
        </div>
        <div className="history-view-container">{historyView}</div>
      </div>
    )
  }
}
export default SearchHistory
