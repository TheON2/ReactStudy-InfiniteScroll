import {MainContainer,} from "./style";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {ResetSearch} from "../../redux/reducers/searchSlice";
import CardContainer from "../../components/CardContainer/CardContainer";
import PictureContainer from "../../components/PictureContainer/PictureContainer";

const Main = () => {
  const dispatch = useDispatch()
  const [mode,setMode] = useState(false);
  const changeMode = useCallback(()=>{
    setMode((prev)=>!prev)
    dispatch(ResetSearch())
  },[mode])
  return (
    <MainContainer>
      <button onClick={changeMode}>모드 체인지</button>
      {!mode ? <CardContainer/> : <PictureContainer/>}
    </MainContainer>
  )
}

export default Main