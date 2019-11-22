import axios from "axios";
const apiKey = "UofALY1yZVwFxyrZNl9YbSaqRRIj3o7Z";

const fetch = async (searchKey, limit , offset= 0 ) => {
  return await axios({
    method: "get",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchKey}&limit=${limit}&offset=${offset}&rating=G&lang=en`
  })
  .then(response => response.data.data)
  .catch(error => alert(`${error}. Please try later!`));
};

export default fetch;
