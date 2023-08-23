import "./index.css";
import "./style.css";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { BsBook } from "react-icons/bs";
import { TbCalendarEvent } from "react-icons/tb";
import telegram from "../../static/telegram.svg";
import insta from "../../static/insta.svg";
import facebook from "../../static/facebook.svg";
import twitter from "../../static/twitter.svg";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticle(id).then((article) => {
      setArticle(article);
    });
  }, []);

  return !article._id ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    // <Box padding="25px 0">
    //   <Container
    //     id="article"
    //     maxWidth={isMobile ? "sm" : "md"}
    //     sx={{
    //       margin: "0 auto",
    //       padding: "25px 25px 25px",
    //       bgcolor: "white",
    //       boxSizing: "border-box",
    //     }}
    //   >
    //     <Typography fontSize={32} fontWeight={700}>
    //       {article.title}
    //     </Typography>
    //     <Typography
    //       dangerouslySetInnerHTML={{ __html: article.body }}
    //     ></Typography>

    //     <Tooltip title="Views" placement="top" arrow>
    //       <Box
    //         alignItems="center"
    //         color="rgb(117,117,117)"
    //         display="flex"
    //         marginTop="40px"
    //         width={56}
    //         sx={{ cursor: "pointer", ":hover": { color: "rgb(32, 33, 34)" } }}
    //       >
    //         <Box className="far fa-eye" fontSize={22} mr={1} />

    //         <Box fontSize={14}>{article.views}</Box>
    //       </Box>
    //     </Tooltip>
    //   </Container>
    // </Box>
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
            {/* <p>
              Chet tilini o’rganishda so’z boyligini doimiy ravishda boyitib
              borish, ya’ni ko’proq yangi so’zlarni yod olish, juda muhimdir.
              Biroq, hamma ham bu ishni uddalay olmaydi. So’z boyligini oshirish
              uchun ilmiy jihatdan tasdiqlangan usullar va aqlli mnemonik
              usullar mavjud. Ingliz tilidagi yangi so’zlarni samaraliroq yodlab
              olishga yordam beradigan o’n bitta maslahatni taklif qilamiz.
            </p>
            <img className="unit-img" src={img} alt="" />
            <h3>• So'zlarni kontekstda yodlang</h3>
            <div className="unit-content">
              <p>
                Til - bu odamlar o’z fikrlarini ifodalashi uchun foydalanadigan
                vositadir. Demak, har bir so’z aloiha-alohida emas, balki
                kontekstdagi ma’nosi bilan muhimdir. Kontekst – bu nutq yoki
                asarning tugal fikrni anglatuvchi parchasi.
              </p>
              <p>
                Inglizcha so’zlarni ajralgan holda yodlamang. Notanish so’zni
                uchratib, uni eslab qolmoqchi bo’lsangiz, u ishlatilgan
                kontekstni yozib oling. Misol uchun, inglizcha ajar (“qiya
                ochiq”) so’zini alohida o’zini yod olishdan ko’ra{" "}
                <b>"the windows were ajar" </b> ("derazalar qiya ochiq edi")
                iborasi ichida eslab qolish osonroq.
              </p>
              <p>
                Sizni qiziqtirgan inglizcha so’z qatnashgan tayyor misollarni
                Reverso, PlayPhrase yoki Google.Translate kabi onlayn
                xizmatlarda topish mumkin. Shuningdek, o’zingiz ham yangi
                so’zlar bilan jumlalar tuzishni mustaqil mashq qiling. Masalan,
                to prefer (“afzal ko’rmoq”) fe’lini eslab qolishingiz kerak. Bu
                fe’lning ma’nosini ochib beradigan misollar tuzing.
              </p>
              <p>
                <b>Would you prefer wine or beer?</b> Siz vino yoki pivoni afzal
                ko’rasizmi?
              </p>
              <p>
                <b>I prefer to be called by my first name.</b>
                Men ismim bilan chaqirishlarini afzal ko’raman.
              </p>
              <p>
                <b>My grandmother prefers detectives to any other TV shows. </b>
                Buvim boshqa hamma teledasturlardan detektivlarni afzal ko’radi.
              </p>
            </div>
            <h3>• Rasmlardan foydalaning</h3>
            <div className="unit-content">
              <p>
                Inglizcha so’zning ma’nosini eslab qolish uchun rasmchalar
                chizing. Yaxshi chiza olmasangiz ham hechqisi yo’q: miyamiz bir
                zayldagi ma’lumotni shunchalik ko’p oladiki, g’alati rasm
                kutilmagan o’ziga xos voqea bo’ladi, kutilmagan voqealarni esa
                biz doim oson eslab qolamiz.
              </p>
              <p>
                Agar o’zingiz chizishni umuman xohlamasangiz, Google’da yangi
                so’z uchun tayyor rasmni toping. Tasvir rang-barang, g’alati
                yoki kulgili bo’lsa yaxshi bo’ladi - bu tarzda u yanada
                mustahkam esda qoladi.
              </p>
              <p>
                "So’z + tasvir" juftlarini elektron shaklda to’plashingiz
                mumkin, lekin qog’oz kartalar shaklida bo’lsa, undan ham
                yaxshiroq bo’ladi. O’zingizni sinab ko’rish uchun kartaning
                rasmli tomoniga qarang va u qaysi inglizcha so’zni anglatishini
                eslashga harakat qiling.
              </p>
            </div>
            <h3>• Sinonim va antonimlarni qidiring</h3>
            <div className="unit-content">
              <p>
                Agar sizda asosiy lug’at boyligi mavjud bo’lsa, yangi inglizcha
                so’zlar uchun sinonim va antonimlarni topishni mashq qiling. Bu
                nafaqat yangi so’zlarni yod olishga yordam beradi, balki
                muloqotda ham qo’l keladi: agar biror so’zni unutib qo’ysangiz,
                uning o’rnini bosuvchi so’zni osongina tanlab, ishlatasiz.
              </p>
              <p>
                Misol uchun, siz irreverent {"("}“(ehtiromsiz, hurmatsiz”)
                so’zini yodlashingiz kerak, va siz allaqachon shu ma’noga ega
                bo’lgan disrespectful (“hurmatsiz”) so’zini bilasiz. Endi faqat
                antonimlarni topish qoladi: respectful - "hurmatli" va polite -
                "odobli". Sinonimlar va antonimlar bilan birgalikda yangi
                inglizcha so’z osonroq esda qoladi.
              </p>
            </div>
            <h3>• O’zakdosh so'zlarni yodlang</h3>
            <div className="unit-content">
              <p>
                Oldingi misolda aytib o’tilgan -respect- ingliz so’z o’zagini
                olaylik. Respect oti "hurmat" degan ma’noni anglatadi. Endi
                ushbu o’zakdan tuzilgan boshqa so’zlarni lug’atdan ko’rib
                chiqamiz:
              </p>
              <table>
                <tr>
                  <th>respectful</th>
                  <th>hurmatli, izzatli</th>
                </tr>
                <tr>
                  <th>to respect</th>
                  <th>hurmat qilmoq</th>
                </tr>
                <tr>
                  <th>to respect</th>
                  <th>hurmat qilmoq</th>
                </tr>
              </table>
              <p>
                Shunday qilib, bitta so’z o’rniga siz bir vaqtning o’zida bir
                nechta so’zlarni o’rgandingiz va ularning ma’nolari bir-biriga
                bog’liq, bu ularni osonroq yod olishga yordam beradi.
              </p>
            </div>
            <h3>• Bilimlarni yangilab turing</h3>
            <div className="unit-content">
              <p>
                Maktabda bunday holatga duch kelgandirsiz: siz o’nlab yangi
                inglizcha so’zlarni o’rgandingiz, uy vazifasini bajardingiz,
                diktant yozdingiz... Va bir oydan keyin hammasini unutdingiz.
                Buning sababi, yangi so’zlarni vaqti-vaqti bilan takrorlab,
                xotirada yangilab turish kerak. Hatto nemis psixologi Hermann
                Ebbinghausning asarlari asosida tuzilgan inglizcha so’zlarni
                takrorlash jadvali tavsiya etiladi:
              </p>
              <ul style={{ listStyle: "none" }}>
                <li>
                  1. Yangi so’zni o’rganganingizdan so’ng uni darhol ishlatish;
                </li>
                <li>2. 20-30 daqiqadan so’ng so’zni qayta ishlatish; </li>
                <li>3. So’zni ertasi kun takrorlash; </li>
                <li>4. Yangi so’zga 2-3 haftadan keyin qaytish; </li>
                <li>5. So’zni 2-3 oydan so’ng takrorlash;</li>
                <li>6. 2-3 yildan keyin so’zni mustahkamlash.</li>
              </ul>
            </div>
            <h3>• Xulosa qilamiz</h3>
            <div className="unit-content">
              <p>
                Biz yangi inglizcha so’zlarni samarali yodlashning 11 usulini
                tahlil qildik - ularni amalda qo’llash va sizga mos keladiganini
                tanlashgina qoldi.
              </p>
              <ul style={{ listStyle: "none" }}>
                <li>
                  1. So’zlarni alohida-alohida emas, balki ular qatnashgan
                  iboralar va jumlalarni yodlang.
                </li>
                <li>2. Yangi so’zlarga assotsiativ rasmlar chizing. </li>
                <li>
                  3. Eslab qolmoqchi bo’lgan so’zingiz uchun sinonim va
                  antonimlarni toping.
                </li>
                <li>
                  4. Bitta inglizcha so’z o’rniga bir vaqtning o’zida bir nechta
                  o’zakdosh so’zlarin o’rganing.
                </li>
                <li>5. Yangi so’zlar bilan kichik hikoyalar tuzing.</li>
                <li>
                  6. Inglizcha so’zlar bilan assotsiativ kartalar taxlang.{" "}
                </li>
                <li>
                  7. Mnemonika usulidan foydalaning: ohangdosh oz’bekcha yoki
                  inglizcha so’zlar.
                </li>
                <li>
                  8. So’zlarni tarkibi bo’yicha tahlil qiling va keng
                  uchraydigan inglizcha prefiks va qo’shimchalarning ma’nolarini
                  eslab qoling.
                </li>
                <li>
                  9. Yangi so’zlarni shaxsan sizni qiziqtiradigan narsalar bilan
                  bog’lang, masalan, foydali idiomalar yoki ingliz tilidagi
                  qo’shiq so’zlari bilan.
                </li>
                <li>
                  10. O’rganilgan so’zlarni unutmaslik uchun ularni vaqti-vaqti
                  bilan takrorlang.
                </li>
                <li>
                  11. Noyob so’zlarga e’tibor bermang, ayniqsa ingliz tilini
                  endigina o’rganishni boshlayotgan bo’lsangiz.
                </li>
              </ul>
            </div> */}
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
              <a>
                <img src={telegram} alt="telegram-icon" />
              </a>
              <a>
                <img src={facebook} alt="facebook-icon" />
              </a>
              <a>
                <img src={insta} alt="insta-icon" />
              </a>
              <a>
                <img src={twitter} alt="twitter-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
