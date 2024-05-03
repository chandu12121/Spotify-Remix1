const EditorsPicksPlayList = props => {
  const {editorsPicks} = props
  const {name, url} = editorsPicks

  return (
    <li>
      <img src={url} />
      <p>{name}</p>
    </li>
  )
}
export default EditorsPicksPlayList
