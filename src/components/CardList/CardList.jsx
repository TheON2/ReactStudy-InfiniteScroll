
import useInput from "../../hooks/useInput";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Container} from "./style";

const CardList =()=>{
  const {data,hasMorePost} = useSelector(state=>state.search)
  const [resultArr,onResultArr,setResultArr] = useInput([])
  useEffect(() => {
    if(data!==null)
      setResultArr(data)
  }, [data,resultArr]);
  return(
    <>
      { resultArr.map((result) => <Container  key={result.url}>
        <div>
          <img src={result.url} style={{width:'150px',height:'150px'}}/>
        </div>
        <div>
          <a dangerouslySetInnerHTML={{ __html: result.breeds[0].country_code }} />
        </div>
        <div>
          <a dangerouslySetInnerHTML={{ __html: result.breeds[0].name }} />
        </div>
        <div>
          <a dangerouslySetInnerHTML={{ __html: result.breeds[0].temperament }} />
        </div>
        <div>
          <a dangerouslySetInnerHTML={{ __html: result.breeds[0].life_span }} />
        </div>
      </Container >)}
    </>
  )
}

export default CardList