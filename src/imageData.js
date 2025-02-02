const fetchImageData = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=R8W7zlVPaABPJARkY0G3z543Ue2Apd4g&s=${query}`;
  const response = await fetch(url, { mod: "cors" });
  const data = await response.json();

  console.log(data.data.images["original"].url);
  document.querySelector("body").style.backgroundImage =
    `url(${data.data.images["original"].url})`;
};

export default fetchImageData;
