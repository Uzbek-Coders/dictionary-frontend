import { useState, useEffect } from "react"
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material"
import api from "./api"


const PopularArticle = ({ id, title, summary, thumbnail }) => {
    return (
        <>
            <CardContent sx={{ padding: '0 0 12px' }}>
                <CardMedia
                    component='img'
                    sx={{ display: 'block', float: 'left', maxWidth: 72, marginRight: '10px', padding: '4px' }}
                    width={72}
                    height={72}
                    src={thumbnail} />

                <Box color='#666' display='inline' fontWeight={300} lineHeight={1.625}>
                    <Typography component='a' href={`/article/${id}`} color='#01756C'>{title}</Typography><br />
                    {summary ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse aspernatur id eos similique soluta, asperiores explicabo veniam repell..."}</Box>
            </CardContent>
        </>
    )
}


const PopularArticles = () => {
    const [popularArticles, setPopularArticles] = useState([])

    useEffect(() => {
        api.getPopularArticles()
            .then(articles => {
                setPopularArticles(articles)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Card sx={{ padding: '20px 20px 8px', marginTop: '40px' }}>
            <CardHeader
                sx={{ padding: '10px 0' }}
                title="Popular articles"
                titleTypographyProps={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.625 }}
            />

            {popularArticles.map(article => {
                return (
                    <PopularArticle
                        key={article._id}
                        id={article._id}
                        title={article.title}
                        summary={article.summary?.length > 139 ? article.summary.slice(0, 139) + '...' : article.summary}
                        thumbnail={article.thumbnail} />
                )
            })}
        </Card>
    )
}


export default PopularArticles
