import './index.css'

const SearchDetailsList = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl} = props
  return (
    <li className="list-details-container">
      <p className="time">{timeAccessed}</p>
      <div className="inner-list-container">
        <div className="except-delete-details">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
    </li>
  )
}
export default SearchDetailsList
