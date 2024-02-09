import './index.css'

const SearchDetailsList = props => {
  const {timeAccessed, logoUrl, title, domainUrl} = props
  return (
    <li className="list-details-container">
      <p className="time">{timeAccessed}</p>
      <div className="inner-list-container">
        <div className="except-delete-details">
          <div className="only-logo">
            <img src={logoUrl} alt="domain logo" className="logo-image" />
          </div>
          <div className="title-url">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-image-container">
          <button type="button" data-testid="delete" className="delete-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default SearchDetailsList
