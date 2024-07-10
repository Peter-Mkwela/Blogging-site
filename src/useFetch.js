import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [timer, setTimer] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      const abortCont = new AbortController();

        setTimeout(() =>{
        fetch(url, {signal: abortCont.signal})
        .then(res =>{
          if (!res.ok){
            throw Error ("Could not find anything from fetch");
          }
          return res.json()
        })
        .then(data=>{
          console.log(data);
          setData(data);
          setTimer(false);
          setError(null);
        })
        .catch(err =>{
          if (err.name === 'AbortError')  {
            console.log("fetch aborted")
          } else{
            setError(err.message);
            setTimer(false);
          }

        })
        },1000)

        return () =>  abortCont.abort();

      },[url])
  return {data, error, timer}
}
export default useFetch;