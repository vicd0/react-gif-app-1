export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JaLDzNENvDFX3IOSl5AYDL83bDbeXwQC&q=${category}&limit=10&rating=g&lang=es`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}