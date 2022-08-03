export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TqGNTh0B9Gdu0J0QhowjVLKGrUHk40mk&q=${category}&limit=20`;
    const resp = await fetch(url) ;
    const { data } =await resp.json() ;
    console.log(data)
    /*uso las llaves asi para no hacer un return y q devuelva un obj*/
    const gifs = data.map (img => ({
      id: img.id ,
      tittle: img.title ,
      url : img.images.downsized_medium.url
    })
    )
    return gifs
}