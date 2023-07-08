import {HeaderContainer, StyledOption, StyledSelect} from "./style";
import {useEffect} from "react";
import useInput from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import { changePicType} from "../../redux/reducers/searchSlice";

const DropdownPicType =()=>{
  const dispatch = useDispatch();
  const [picType,onChangePicType] = useInput('jpg');
  useEffect(()=>{
    dispatch(changePicType(picType))
  },[picType])
  return (
    <>
      <HeaderContainer>
        <StyledSelect value={picType} onChange={onChangePicType}>
          <StyledOption value={'jpg'}>JPG</StyledOption>
          <StyledOption value={'gif'}>GIF</StyledOption>
          <StyledOption value={'png'}>PNG</StyledOption>
        </StyledSelect>
      </HeaderContainer>
    </>
  )
}

export default DropdownPicType