import './index.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Box,
    Container,
    CircularProgress,
    Typography,
    useMediaQuery,
    useTheme,
    Toolbar,
    Tooltip
} from '@mui/material'


const { useState, useEffect } = React
const BASE_URI = 'https://dictinary-api.vercel.app/api/v1/blog'


const fetchArticle = async id => {
    try {
        const res = await fetch(`${BASE_URI}/${id}`, { headers: { 'Accept': 'application/json' } })
        return await res.json()
    } catch (error) {
        alert(error.message)
        console.error(error)
    }
}


const Article = () => {
    const { id } = useParams()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetchArticle(id)
            .then(article => {
                setArticle(article)
            })
    }, [])

    return (!article._id) ?
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
            <CircularProgress />
        </Box>
        :
        <Box padding='25px 0'>
            <Container
                id='article'
                maxWidth={isMobile ? 'sm' : 'md'}
                sx={{ margin: '0 auto', padding: '25px 25px 25px', bgcolor: 'white', boxSizing: 'border-box' }}>
                <Typography fontSize={32} fontWeight={700}>{article.title}</Typography>
                <Typography dangerouslySetInnerHTML={{ __html: article.body }}></Typography>

                <Tooltip title="Views" placement='top' arrow>
                    <Box
                        alignItems='center'
                        color='rgb(117,117,117)'
                        display='flex'
                        marginTop='40px'
                        width={56}
                        sx={{ cursor: 'pointer', ":hover": { color: 'rgb(32, 33, 34)' } }}>

                        <Box className='far fa-eye' fontSize={22} mr={1} />

                        <Box fontSize={14}>
                            {article.views}
                        </Box>
                    </Box>
                </Tooltip>
            </Container>
        </Box >
}


export default Article
