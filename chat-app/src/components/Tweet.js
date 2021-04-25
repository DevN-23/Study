const Tweet = ({ name, message }) => {  
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <p>Number of likes</p>
    </div>
  )
}

export default Tweet;