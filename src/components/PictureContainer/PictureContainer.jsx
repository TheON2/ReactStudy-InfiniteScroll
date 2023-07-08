import PictureListHeader from "../PictureListHeader/PictureListHeader";
import PictureList from "../PirctureList/PictureList";
import {Parent} from "../../layout/Main/style";
import Loading from "../Loading/Loading";
import {useDispatch, useSelector} from "react-redux";
import {useMutation, useQueryClient} from "react-query";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {getPictureSearch} from "../../api/search";
import {addPreData, ConcatPreData, searchResult} from "../../redux/reducers/searchSlice";

const PictureContainer =()=>{
  const {hasMorePost,picType,page} = useSelector(state=>state.search)
  const queryClient = useQueryClient();
  const dispatch = useDispatch()
  const [ref, inView] = useInView();

  const {mutate:search_PrePictureMutate, isLoading:prePictureLoading} = useMutation(getPictureSearch, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('search');
      dispatch(addPreData(data))
    },
  });

  const {mutate:search_PictureMutate, isLoading:pictureLoading} = useMutation(getPictureSearch, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('search');
      dispatch(searchResult(data))
      search_PrePictureMutate({page:page+1, mime_types: picType});
    },
  });

  useEffect(
    () => {
      if (inView && !pictureLoading && hasMorePost) {
        dispatch(ConcatPreData())
      }
    },[inView]);

  useEffect(
    () => {
      search_PictureMutate({page, mime_types: picType});
    },[picType]);

  useEffect(() => {
    if(!hasMorePost)
      search_PrePictureMutate({page, mime_types: picType});
  },[hasMorePost]);
  return(
    <>
      <PictureListHeader/>
      <div>
      <PictureList/>
      <div id='bottom' style={{height:'150px'}} ref={ !prePictureLoading ? ref : undefined}>
        { !hasMorePost && <Parent><Loading /></Parent>}
      </div>
    </div>
    </>
  )
}

export default PictureContainer