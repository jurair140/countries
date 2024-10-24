import React, {useState,useEffect} from 'react'
import { getAllCountries } from '../Allapi'
import { Link } from 'react-router-dom';






function Home() {

    const [data,setData]=useState([])

    useEffect(() => {
            getData()
    },[])

    const getData = async () =>{
        const result = await getAllCountries()
        console.log(result)
        
        if(result.status == 200){
            setData(result.data)
        }
    }

  return (
    <>
     <div className='container-fluid p-5 '>
        {
            data.length > 0 ?
            <div className='row '>
                {
                    data.map(item=>(
                        <div className="card col-3 mb-5">
                            <img src={item.flags.png} className="card-img-top" alt="..." height={'200px'}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name.common}</h5>
                                <Link to={`/cnt/${item.name.common}`} >view more..</Link>
                           
                     </div>
</div>
                    ))

                }
            </div>
            :
            <h4>no data</h4>
            
        }
            
        
     </div>
     

    </>

  )
}

export default Home
