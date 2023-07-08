
import useInput from "../../hooks/useInput";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Container} from "./style";

const PictureList =()=>{
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
          <img src={result.url} style={{width:'450px',height:'450px'}}/>
        </div>
      </Container >)}
    </>
  )
}

export default PictureList