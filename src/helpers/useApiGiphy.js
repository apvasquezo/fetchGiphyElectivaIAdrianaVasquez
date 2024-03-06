import { useEffect, useState, useCallback } from "react";

const useApiGiphy = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchApi = useCallback(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                setLoading(true);
                setData(respuestaJson.data)
                //console.log(respuestaJson);
            })
            .catch(error => console.log(error))
    }, [url])

    useEffect(() => {
        fetchApi();        
    }, [url, fetchApi])

    return { loading, data }
}
 
export default useApiGiphy;