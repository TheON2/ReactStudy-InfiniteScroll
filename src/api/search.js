import api from "../axios/api";

const getPostSearch = async (param) => {
  console.log(param)
  const response = await api.get(`/images/search`,{
    params: {
      format: 'json',
      limit: 10,
      page:param.page,
      order:'ASC',
      has_breeds:true,
      mime_types:param.mime_types,
      size:'thumb',
    },});
  console.log(response.data)
  return response.data;
};

export {getPostSearch};