import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import { getCountryDetails } from '../Allapi'


function Country() {

  const [data,setData]=useState([])

   const {name} = useParams()
    console.log(data)

    useEffect(() => {
      getData()
    },[])

      const getData = async () =>{
        const result = await getCountryDetails(name)
        console.log(result)
       
        if(result.status == 200){
          setData(result.data[0])
      }
      }


  return (
    <>
    
    <Link to='/' >go back</Link>

   <div className='p-5 container-fluid'>
        <Row>
          <Col >
            <img src={data?.flags?.png} width={'100%'} alt="" />
          </Col>
          <Col >
            <h1>{data?.name?.common} </h1>
            <h3>'{data?.capital?.[0]}' is the capital</h3>
            <h5>'{data?.name?.official} 'is the official name</h5>
          </Col>
        </Row>
   </div>

   </>
  )
}

export default Country
