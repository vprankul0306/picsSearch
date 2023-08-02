import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID CeX0F6n0vFdx_qitJe6va8KGbJcbFavgVYqFfXQrw4c",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
