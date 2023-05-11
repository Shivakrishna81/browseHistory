import './index.css'

const HistoryItem = props => {
  const {details, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const removeItem = () => {
    deleteItem(id)
  }

  return (
    <li className="div1">
      <p>{timeAccessed}</p>
      <div className="div2">
        <img src={logoUrl} alt={domainUrl} />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete"
        onClick={removeItem}
      />
    </li>
  )
}
export default HistoryItem
