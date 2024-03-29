import "./index.css";
import "./style.css";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CircularProgress
} from "@mui/material";
import { BsBook } from "react-icons/bs";
import {
  TbBrandTelegram,
  TbBrandFacebook,
  TbBrandYoutube,
  TbBrandGmail
} from "react-icons/tb";
const { useState, useEffect } = React;
const BASE_URI = "https://dictinary-api.vercel.app/api/v1/blog";

const fetchArticle = async (id) => {
  try {
    const res = await fetch(`${BASE_URI}/${id}`, {
      headers: { Accept: "application/json" },
    });
    return await res.json();
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticle(id).then((article) => {
      setArticle(article);
    });
  }, [id]);

  return !article._id ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)"
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <div className="article-item">
      <div className="grammarItem">
        <div className="container">
          <div className="article-item-unit">
            <h2 className="unit-title" style={{ textAlign: "center" }}>
              {article.title}
            </h2>
            <div
              className="article-item-content"
              dangerouslySetInnerHTML={{ __html: article.body }}
            ></div>
          </div>

          <div className="about-unit">
            <div className="about-unit-st">
              {/* <p>
                <TbCalendarEvent /> {article.date} month ago
              </p> */}
              <p>
                <BsBook />
                number of reads: {article.views}
              </p>
            </div>
            <div className="about-unit-sm">
              <a href="https://t.me/AsqarArslonov">
                <TbBrandTelegram />
              </a>
              <a href="https://www.facebook.com/people/LeksikaUZ/100086569411918/">
                <TbBrandFacebook />
              </a>
              <a href="https://www.youtube.com/@leksikauz">
                <TbBrandYoutube />
              </a>
              <a href="mailto:asqararslonov2008@gmail.com">
                <TbBrandGmail/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
