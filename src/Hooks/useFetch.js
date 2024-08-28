import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


        useEffect(()=>{

            const abortCont = new AbortController();

        
                fetch(url, {signal : abortCont.signal})
                .then(res => 
                {
                    if(!res.ok){
                        throw Error("Data could not be found");
                    }
                    return res.json()
                }  
            )
            .then(data => {
                setData(data)
                console.log(data);
                    setIsPending(false);
                }).catch((err)=>{
                    if(err.name === 'AbortError'){
                        console.log("fetch aborted")
                    }
                    else{
                        setError(err.message);
                        setIsPending(false);
                    }
                });

            return ()=>{
                console.log('cleanup')
                abortCont.abort();
            }

        },[url])

        //added line for test purpose
        //new line for test

        return {data, isPending, error};

}

export default useFetch;