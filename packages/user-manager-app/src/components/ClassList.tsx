import React from "react";
import { useQuery } from "react-query";
import { getClass } from "../api/api";
const ClassList = () => {
  const { data: classList, isLoading, isError, error } = useQuery(["classList"], getClass);
  console.log(classList, "here");
  if(classList === undefined){
    return <> <p>Cargando...</p> </>
  }
    return classList.map((classes:any)=>(
        <>
           <div>
                <h2>{classes.class.name}</h2>
                <p>{classes.class.district.name}</p>     
            </div> 
        
        </>
    ))
};

export default ClassList;
