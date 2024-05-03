const NewReleasesPlayList = props => {
  const {newPlayList} = props
  const {url, name} = newPlayList

  return (
    <li className="product-item">
      <img src={url} alt="website logo" className="thumbnail" />
      <p>{name}</p>
    </li>
  )
}
export default NewReleasesPlayList
