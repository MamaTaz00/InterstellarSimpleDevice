import  { FETCH_FOREX }  from '../action-types';


export const fetchForex = () => {
    return async dispatch => {
      try {
        
        //const url = 'http://192.168.1.170:8080/forex1?idI=179&dataInizio=2016-3-27 00:00:00&dataFine=2016-3-30 00:00:00'
        const url = "https://google.com"
        const req = await fetch(url)
        const res = await req.json()
        dispatch({
          type: FETCH_FOREX,
          payload: res
        })
      } catch (err) {
        console.error(err)
      }
    }
}

//export default fetchForex