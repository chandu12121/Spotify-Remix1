const GenresAndMoodsPlayList = props => {
  const {genreList} = props

  const {url, name} = genreList

  return (
    <li className="product-item">
      <img src={url} />
      <p>{name}</p>
    </li>
  )
}
export default GenresAndMoodsPlayList
