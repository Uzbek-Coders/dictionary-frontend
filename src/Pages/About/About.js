import React, { useState } from "react";
import "./About.css";
import { AiOutlineClose } from "react-icons/ai";

import Designer from "../../static/Lola_Arslanova.jpg";
import Dev2 from "../../static/Kamol_Dev.jpg";
import Dev from "../../static/dev.jpeg";
export const About = () => {
  const [showModal, setShowModal] = useState({
    open: false,
    title: "",
    text: "",
  });

  return (
    <div className="about" style={{ background: "#f2f2f2" }}>
      <div className="about-container">
        <div className="about-desc">
          <p style={{ lineHeight: "32px" }}>
            Remember the days when you couldn’t find the proper translation of
            an English word to the Uzbek language? I also know those feelings
            when you run against the lack of general use dictionaries - not to
            mention the specialized ones, a total absence of online resources in
            Uzbek, a pre-requisite of knowing the Russian language in order to
            apply indirect translation (EN RU UZ and vice versa).{" "}
          </p>
        </div>
        <hr className="about-line" />

        <div className="about-card">
          <h3>Book edition</h3>
          <div className="about-card-content">
            <p>
              To reverse the situation, it was decided to compile a large
              English-Uzbek-English dictionary and the work started back in
              2003. 2 years later, the{" "}
              <a href="https://www.worldcat.org/title/70168096">
                first edition
              </a>{" "}
              of the bilingual dictionary was published in G’afur G’ulom
              publishing house; it is still{" "}
              <a href="https://asaxiy.uz/product/akbar-kholmurodov-ravshan-azizov-english-uzbek-uzbek-english-dictionary-tamaddun-nashriyot">
                available
              </a>
              for sale online. Much attention was directed to the Uzbek-English
              part; even now, it is the most comprehensive and complete UZ-EN
              dictionary.
            </p>

            <p>
              A{" "}
              <a href="https://play.google.com/store/apps/details?id=com.hy.enguzb.dictionary&hl=en&gl=US">
                mobile app
              </a>{" "}
              for Android devices was launched based on the dictionary with
              major update of the lexical database.
            </p>
          </div>
        </div>

        <div className="about-card">
          <h3>Website dictionary </h3>
          <div className="about-card-content">
            <p>
              However, we still desperately needed a high-quality online
              dictionary for English-Uzbek language pair that could cover both
              everyday and area-specific vocabulary. In September 2022, on the
              date of 31th anniversary of Independence of Uzbekistan, Leksika.uz
              was successfully launched.
            </p>

            <p>
              Leksika.uz has mainly been designed to give English learners of
              any level the help they need to read, speak and write English more
              effectively. It is also intended to assist translators and
              localizers by providing useful tips and rules of thumb; these can
              be found in Localization section.
            </p>
          </div>
        </div>

        <div className="about-card">
          <h3>Prospects</h3>
          <div className="about-card-content">
            <ul style={{ lineHeight: "25px", fontFamily: "Roboto" }}>
              <li>
                Russian-Uzbek-Russian dictionary section with largest database
                on the web;
              </li>
              <li>
                content for easier learning of English, including grammar,
                writing tips, learning new words;
              </li>
              <li>useful tips and motivational articles for freelancers;</li>
              <li>
                articles for localizers to Uzbek language, including intricacies
                of Uzbek grammar;
              </li>
              <li>and much more.</li>
            </ul>
          </div>
        </div>

        <hr className="about-line" />
        {/* // Our Team */}
        <div className="about-card">
          <h3>Our team</h3>
          <div className="team">
            <section className="team-box">
              <div>
                <img className="team-box-img" src={Dev} />
                <button
                  className="team-img-btn"
                  onClick={() => {
                    setShowModal({
                      open: true,
                      title: "Asqar Arslonov",
                      text: "Having started his IT-education at the age of 12, Asqarjon has reached the level of full-stack developer just 2 years later. Taking several online courses (Technical Support Fundamentals, Computer Networking) was followed by successful completion of Front-End Development and Back-End Development courses at the Open Web Academy education center in Qarshi city. Being an eighth-grader, he is fully responsible for the technical support of Leksika.uz",
                    });
                  }}
                >
                  Read more
                </button>
              </div>

              <h4>Asqar Arslonov</h4>
              <hr />
              <p>Full-Stack (MERN) Developer</p>
              <button
                className="team-btn"
                onClick={() => {
                  setShowModal({
                    open: true,
                    title: "Asqar Arslonov",
                    text: "Having started his IT-education at the age of 12, Asqarjon has reached the level of full-stack developer just 2 years later. Taking several online courses (Technical Support Fundamentals, Computer Networking) was followed by successful completion of Front-End Development and Back-End Development courses at the Open Web Academy education center in Qarshi city. Being an eighth-grader, he is fully responsible for the technical support of Leksika.uz",
                  });
                }}
              >
                More info
              </button>
            </section>
            <section className="team-box">
              <div>
                <img className="team-box-img" src={Designer} />
                <button
                  className="team-img-btn"
                  onClick={() => {
                    setShowModal({
                      open: true,
                      title: "Lola Arslanova",
                      text: "Lola has been crazy about web design since her first self-study classes on YouTube. As you have guessed, her hobby is drawing. Being now a student at the University of World Economy and Diplomacy, Lola is sure she will be able to make economics more beautiful through art.",
                    });
                  }}
                >
                  Read more
                </button>
              </div>

              <h4>Lola Arslanova</h4>
              <hr />
              <p>UI/UX Designer</p>
            </section>
            <section className="team-box">
              <div>
                <img className="team-box-img" src={Dev2} />
                <button
                  className="team-img-btn"
                  onClick={() => {
                    setShowModal({
                      open: true,
                      title: "Kamollidin Nuriddinov",
                      text: "Kamoliddin started taking his front-end cources when he was 11. Since then he has developed some simple projects, joining later our Leksika team. He has helped a lot with the front-end part of the project and become a critical part of the team.",
                    });
                  }}
                >
                  Read more
                </button>
              </div>

              <h4>Kamoliddin Nuriddinov</h4>
              <hr />
              <p>Front-end developer</p>
            </section>
          </div>
          {showModal.open && (
            <div className="about-modal">
              <div className="about-modal-title">
                <h2>{showModal.title}</h2>
                <AiOutlineClose
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModal({ open: false });
                  }}
                />
              </div>
              <p>{showModal.text}</p>
            </div>
          )}
        </div>
        {/* <div className="u-body u-xl-mode">
          <section
            className="u-clearfix u-grey-5 u-section-2"
            id="carousel_c549"
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                  <div className="u-layout-col">
                    <h1
                      style={{
                        textAlign: "center",
                        margin: "0 auto",
                        marginTop: "40px",
                        marginBottom: "40px",
                        ontWeight: 600,
                        display: "inline",
                      }}
                      className="u-custom-font u-font-montserrat u-text u-text-default u-text-1"
                    >
                      Our team
                      <hr
                        style={{
                          width: "222px",
                          borderRadius: "105px",
                          height: "3px",
                          border: "2px",
                          margin: "0 auto",
                          background: "rgb(5,97,36)",
                          background:
                            "linear-gradient(90deg, rgba(5,97,36,1) 0%, rgba(5,144,119,1) 35%, rgba(2,175,150,1) 99%)",
                        }}
                      />
                    </h1>
                    <div className="u-size-30">
                      <div className="u-layout-row">
                        <div className="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                          <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-container-layout-1">
                            <img
                              src={Founder}
                              width="300"
                              style={{ textAlign: "center", margin: "0 auto" }}
                            />
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
                          <div className="u-container-layout u-valign-middle u-container-layout-2">
                            <h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                              Akbar Kholmuradov
                            </h2>
                            <h5 className="u-custom-font u-font-raleway">
                              Founder and content manager
                            </h5>
                            <p className="u-align-justify u-custom-font u-font-montserrat u-text u-text-3">
                              {" "}
                              Having graduated the International Economic
                              Relations department of the University of World
                              Economy and Diplomacy in 2001, Akbar dedicated his
                              later years to translation and localization. When
                              working as a translator in various huge projects,
                              he faced the difficulty in finding reliable
                              sources that can be used in translation to/from
                              Uzbek language, and as a result some books for
                              English learners and translators were published
                            </p>
                            <div>
                              <div>
                                <p>
                                  English-Uzbek-English dictionary (
                                  <a href="https://asaxiy.uz/product/akbar-kholmurodov-ravshan-azizov-english-uzbek-uzbek-english-dictionary-tamaddun-nashriyot">
                                    <span>book</span>
                                  </a>
                                  ,{" "}
                                  <a href="https://play.google.com/store/apps/details?id=com.hy.enguzb.dictionary&amp;hl=en&amp;gl=US">
                                    <span>app</span>
                                  </a>
                                  )
                                </p>
                                <p className="u-custom-font u-font-montserrat u-text u-text-4">
                                  English Grammar for Uzbek Learners (
                                  <a href="https://asaxiy.uz/product/akbar-kholmurodov-ravshan-azizov-english-uzbek-uzbek-english-dictionary-tamaddun-nashriyot">
                                    <span>book</span>
                                  </a>
                                  ,{" "}
                                  <a href="https://asaxiy.uz/product/akbar-kholmurodov-ravshan-azizov-english-uzbek-uzbek-english-dictionary-tamaddun-nashriyot">
                                    <span>app</span>
                                  </a>
                                  )
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                  <div className="u-layout-col">
                    <div className="u-size-30">
                      <div className="u-layout-row">
                        <div className="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                          <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-container-layout-1">
                            <img
                              src={Dev}
                              width="300"
                              style={{ textAlign: "center", margin: "0 auto" }}
                            />
                          </div>
                        </div>

                        <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
                          <div className="u-container-layout u-valign-middle u-container-layout-2">
                            <h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                              Asqar Arslonov
                            </h2>
                            <h5 className="u-custom-font u-font-raleway">
                              Full-Stack (MERN) Developer
                            </h5>
                            <p className="u-align-justify u-custom-font u-font-montserrat u-text u-text-3">
                              Having started his IT-education at the age of 12,
                              Asqarjon has reached the level of full-stack
                              developer just 2 years later. Taking several
                              online courses (Technical Support Fundamentals,
                              Computer Networking) was followed by successful
                              completion of Front-End Development and Back-End
                              Development courses at the Open Web Academy
                              education center in Qarshi city. Being an
                              eighth-grader, he is fully responsible for the
                              technical support of Leksika.uz.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      </div>
      {showModal.open && <div className="overlay"></div>}
    </div>
  );
};
