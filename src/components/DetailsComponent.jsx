import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTodoById } from '../api/TodoApiService';

export default function DetailsComponent() {
  const {id} = useParams();
  const [description,setDescription] = useState();

  useEffect(()=>getTodoInfo(),[id])

  function getTodoInfo(){
    getTodoById("Admin",id)
    .then(response=>setDescription(response.data.description))
    .catch(error=>console.log(error))
  }

  return (
    <div>
      details: {id} description: {description}
    </div>
  )
}
