
export const exercisesOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "795ebbb0efmsh3e313654d843722p15f5e5jsnfc1562ee96a5",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    // params: {
    //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
    // },
    headers: {
      'X-RapidAPI-Key': '795ebbb0efmsh3e313654d843722p15f5e5jsnfc1562ee96a5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url , options) => {
    const response = await fetch(url , options) ;
    const data = await response.json();

    return data;
}