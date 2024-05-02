import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="list-item">
      <div className="container">
        <img src={imageUrl} alt="thumbnail" className="county" />
        <div className="section">
          <p>{name}</p>
          <button
            className="btn"
            type="button"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default VisitedCountries
