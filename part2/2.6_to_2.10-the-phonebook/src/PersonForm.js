const PersonForm = ({onSubmit, nameValue, nameHandler, numberValue, numberHandler}) => {
    return(
      <form onSubmit={onSubmit}>
          <div>
            name: <input value={nameValue} onChange={nameHandler} /><br/>
            number: <input value={numberValue} onChange={numberHandler} />
          </div>
          <div>
            <button type="submit" >add</button>
          </div>
      </form>
    )
  } 
export default PersonForm