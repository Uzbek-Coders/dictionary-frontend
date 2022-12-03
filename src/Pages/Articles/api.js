 const BASE_URI = 'https://dictinary-api.vercel.app/api/v1/blog'
const OPTIONS = { headers: { 'Accept': 'application/json' } }


const getArticles = async (limit, page) => {
    try {
        const res = await fetch(`${BASE_URI}/?limit=${limit}&page=${page}`, OPTIONS)
        return await res.json()
    } catch (error) {
        console.error(error)
    }
}


const getPopularArticles = async () => {
    try {
        const res = await fetch(`${BASE_URI}/popular/`, OPTIONS)
        return await res.json()
    } catch (error) {
        console.error(error)
    }
}


const getTags = async () => {
    try {
        const res = await fetch(`${BASE_URI}/tags`, OPTIONS)
        return await res.json()
    } catch (error) {
        console.error(error)
    }
}


const getArticlesByTag = async (limit, page, tag) => {
    try {
        const res = await fetch(`${BASE_URI}/tag/${tag}/?limit=${limit}&page=${page}`, OPTIONS)
        return await res.json()
    } catch (error) {
        console.error(error)
    }
}


const search = async (limit, page, text) => {
    try {
        const res = await fetch(`${BASE_URI}/search/${text}/?limit=${limit}&page=${page}`, OPTIONS)
        return await res.json()
    } catch (error) {
        console.error(error)
    }
}


export default { getArticles, getPopularArticles, getTags, getArticlesByTag, search }
