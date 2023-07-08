import {Container, MainContainer, SearchInput, SearchResult, SearchResultItem, Suggestion, Title} from "./style";
import useInput from "../../hooks/useInput";
import {useCallback, useEffect, useState} from "react";
import useMutate from "../../hooks/useMutate";
import {
  getPostSearch,
} from "../../api/search";
import {useDispatch, useSelector} from "react-redux";
import {addPreData, ConcatPreData, searchResult} from "../../redux/reducers/searchSlice";
import {useInView} from "react-intersection-observer";
import {useMutation, useQueryClient} from "react-query";
import CardList from "../../components/CardList/CardList";
import CardListHeader from "../../components/CardListHeader/CardListHeader";
import DropdownPicType from "../../components/DropDownPicType/DropDownPicType";

const Main = () => {
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

  return (
    <MainContainer>
      <DropdownPicType/>
      <CardListHeader/>
        <CardList/>
      <div id='bottom' style={{height:'200px'}} ref={ !preSearchLoading ? ref : undefined} />
    </MainContainer>
  )
}

export default Main