import CardListHeader from "../CardListHeader/CardListHeader";
import CardList from "../CardList/CardList";
import {Parent} from "../../layout/Main/style";
import Loading from "../Loading/Loading";
import {useDispatch, useSelector} from "react-redux";
import {useMutation, useQueryClient} from "react-query";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import {getPictureSearch, getPostSearch} from "../../api/search";
import {addPreData, ConcatPreData, searchResult} from "../../redux/reducers/searchSlice";

const CardContainer =()=>{
  const {hasMorePost,picType,page} = useSelector(state=>state.search)
  const queryClient = useQueryClient();
  const dispatch = useDispatch()
  const [ref, inView] = useInView();

  const {mutate:search_PrePostMutate, isLoading:preSearchLoading} = useMutation(getPostSearch, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('search');
      dispatch(addPreData(data))
    },
  });

  const {mutate:search_PostMutate, isLoading:searchLoading} = useMutation(getPostSearch, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('search');
      dispatch(searchResult(data))
      search_PrePostMutate({page:page+1, mime_types: picType});
    },
  });

  useEffect(
    () => {
      if (inView && !searchLoading && hasMorePost) {
        dispatch(ConcatPreData())
      }
    },[inView]);

  useEffect(
    () => {
      search_PostMutate({page, mime_types: picType});
    },[]);

  useEffect(() => {
    if(!hasMorePost)
      search_PrePostMutate({page, mime_types: picType});
  },[hasMorePost]);

  return(
    <>
      <CardListHeader/>
      <CardList/>
      <div id='bottom' style={{height:'150px'}} ref={ !preSearchLoading ? ref : undefined}>
        { !hasMorePost && <Parent><Loading /></Parent>}
      </div>
    </>
  )
}

export default CardContainer