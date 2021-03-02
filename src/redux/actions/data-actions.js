import  { FETCH_USD_FOREX }  from '../action-types';


export const fetchForex = () => {
    return async dispatch => {
      try {
        const url = 'http://192.168.1.170:8080/forex2?actor=USD&dataInizio=2016-1-1%00:00:00&dataFine=2018-1-1%00:00:00'
        const req = await fetch(url)
        const res = await req.json()
        
        dispatch({
          type: FETCH_USD_FOREX,
          payload: res
        })
      } catch (err) {
        console.error(err)
      }
    }
}

//export default fetchForex