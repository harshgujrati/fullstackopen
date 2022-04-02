import { useState } from 'react'

const Country = ({data}) =>{
    const [showDetail, setShowDetail] = useState(false)
    if(showDetail){
      return(
        <>
          <div>{data.name.common}</div>
          <div>Area: {data.area}</div><br/>
          <div><img src={data.flags.png} alt='country flag'/></div>
          <button onClick={() => setShowDetail(!showDetail)}>hide</button>
        </>
      )
    }
    else{
      return(
        <>
          <div>{data.name.common}</div>
          <button onClick={() => setShowDetail(!showDetail)}>show</button>
        </>
      )
    }
  }

  export default Country