import React from "react";
import "./About.min.css";
import Founder from "../../static/founder.jpeg";
import Dev from "../../static/dev.jpeg";
export const About = () => {
  return (
    <div style={{ background: "#f2f2f2"}}>
      <div  class="font-weight-normal" style={{marginTop: "48px", fontStyle:"italic", width: "68%",wordSpacing:"0.75", textAlign: "center", margin: "0 auto", fontFamily: "Roboto", fontSize: "18px"}}>
        <p style={{lineHeight:'32px'}}>Remember the days when you couldn’t find the proper translation of an English word to the Uzbek language? I also know those feelings when you run against the lack of general use dictionaries - not to mention the specialized ones, a total absence of online resources in Uzbek, a pre-requisite of knowing the Russian language in order to apply indirect translation (EN  RU  UZ and vice versa).	</p>
      </div>
      {/* // Book Edition */} 
<div style={{ backgroundColor: "#f2f2f2", paddingTop: "24px"}}>
    
      <div style={{width: "72%",marginTop:"66px",  margin: "0 auto", textAlign: "center"}}>
        <h1 style={{textAlign: "center", marginBottom:"20px"}}>Book edition <hr style={{width: "222px",borderRadius: "105px",height: "2px", "border":"2px", margin:"0 auto", background: "rgb(5,97,36)", background: "linear-gradient(90deg, rgba(5,97,36,1) 0%, rgba(5,144,119,1) 35%, rgba(2,175,150,1) 99%)"}}/></h1>
        <p  style={{lineHeight:"28px", wordSpacing:"0.75", fontSize: "16px", fontFamily: "Roboto"}}>To reverse the situation, it was decided to compile a large English-Uzbek-English dictionary and the work started back in 2003. 2 years later, the first edition of the bilingual dictionary was published in G’afur G’ulom publishing house; it is still available for sale online. Much attention was directed to the Uzbek-English part; even now, it is the most comprehensive and complete UZ-EN dictionary.</p>
        {/* <br/> */}
        {/* <div class="info" style={{padding: "6px", borderRadius: "5px", background: "#c6e7ed", color: "#797878"}}> */}
        <p style={{lineHeight:"25px", wordSpacing:"0.75", fontSize: "16px", fontFamily: "Roboto"}}>A mobile app for Android devices was launched based on the dictionary with major update of the lexical database.
</p>
        {/* </div> */}
</div>
      </div>
      {/* // Web  Edition */} 
<div style={{ backgroundColor: "#f2f2f2",paddingTop: "32px"}}>
    
      <div style={{width: "65%",marginTop:"66px",  margin: "0 auto", textAlign: "center"}}>
        <h1 style={{textAlign: "center", marginBottom:"20px"}}>Website dictionary <hr style={{maxWidth: "264px", minWidth: "100px",borderRadius: "105px",height: "2px", "border":"2px", margin:"0 auto", background: "rgb(5,97,36)", background: "linear-gradient(90deg, rgba(5,97,36,1) 0%, rgba(5,144,119,1) 35%, rgba(2,175,150,1) 99%)"}}/></h1>
        <p  style={{lineHeight:"28px", wordSpacing:"0.75", fontSize: "16px", fontFamily: "Roboto"}}>However, we still desperately needed a high-quality online dictionary for English-Uzbek language pair that could cover both everyday and area-specific vocabulary. In September 2022, on the date of 31th anniversary of Independence of Uzbekistan, Leksika.uz was successfully launched.</p>
        {/* <br/> */}
        {/* <div class="info" style={{padding: "6px", borderRadius: "5px", background: "#c6e7ed", color: "#797878"}}> */}
        <p style={{lineHeight:"25px", wordSpacing:"0.75", fontSize: "16px", fontFamily: "Roboto"}}>Leksika.uz has mainly been designed to give English learners of any level the help they need to read, speak and write English more effectively. It is also intended to assist translators and localizers by providing useful tips and rules of thumb; these can be found in Localization section.
</p>
        {/* </div> */}
<h2>Prospects</h2>
</div>
<div className="container1" style={{display:"flex", justifyContent: "center"}}>
<ul style={{lineHeight: "25px", fontFamily: "Roboto"}}>
  <li>Russian-Uzbek-Russian dictionary section with largest database on the web;</li>
  <li>content for easier learning of English, including grammar, writing tips, learning new words;</li>
  <li>useful tips and motivational articles for freelancers;</li>
  <li>articles for localizers to Uzbek language, including intricacies of Uzbek grammar;</li>
  <li>and much more.</li>
</ul>
</div>
      </div>
      {/* // Our Team */}
      <div class="u-body u-xl-mode">
        <section class="u-clearfix u-grey-5 u-section-2" id="carousel_c549">
          <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div class="u-layout">
                <div class="u-layout-col">
                  <h1
                    style={{
                      textAlign: "center",
                      margin: "0 auto",
                      marginTop: "40px",
                      marginBottom: "40px",
                      ontWeight: 600,
                      display: "inline"
                    }}
                    class="u-custom-font u-font-montserrat u-text u-text-default u-text-1"
                  >Our team
                  <hr style={{width: "222px",borderRadius: "105px",height: "2px", "border":"2px", margin:"0 auto", background: "rgb(5,97,36)", background: "linear-gradient(90deg, rgba(5,97,36,1) 0%, rgba(5,144,119,1) 35%, rgba(2,175,150,1) 99%)"}}/>
                  </h1>
                  <div class="u-size-30">
                    <div class="u-layout-row">
                      <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                        <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-container-layout-1">
                          <img
                            src={Founder}
                            width="300"
                            style={{ textAlign: "center", margin: "0 auto" }}
                          />
                        </div>
                      </div>
                      <div class="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
                        <div class="u-container-layout u-valign-middle u-container-layout-2">
                          <h2 class="u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                            Akbar Kholmuradov
                          </h2>
                          <h5 class="u-custom-font u-font-raleway">
                            Founder and content manager
                          </h5>
                          <p class="u-align-justify u-custom-font u-font-montserrat u-text u-text-3">
                            {" "}
                            Having graduated the International Economic
                            Relations department of the University of World
                            Economy and Diplomacy in 2001, Akbar dedicated his
                            later years to translation and localization. When
                            working as a translator in various huge projects, he
                            faced the difficulty in finding reliable sources
                            that can be used in translation to/from Uzbek
                            language, and as a result some books for English
                            learners and translators were published
                          </p>
                          <div class="u-size-30">
                            <div class="u-layout-row">
                              <div
                                class="u-align-justify u-container-style u-layout-cell u-size-60 u-white u-layout-cell-3"
                                style={{ borderRadius: "10px" }}
                              >
                                <div
                                  class="u-container-layout u-valign-middle u-container-layout-3"
                                  style={{
                                    padding: "10px 0 0 40px",
                                    color: "#000 !imporatnt",
                                  }}
                                >
                                  <p class="u-custom-font u-font-montserrat u-text u-text-4">
                                    English-Uzbek-English dictionary (
                                    <a href="https://www.worldcat.org/title/70168096">
                                      <span>book</span>
                                    </a>
                                    ,{" "}
                                    <a href="http://en.wikipedia.org/wiki/">
                                      <span>app</span>
                                    </a>
                                    )
                                  </p>
                                  <p class="u-custom-font u-font-montserrat u-text u-text-4">
                                    English Grammar for Uzbek Learners(
                                    <a href="https://www.worldcat.org/title/70168096">
                                      <span>book</span>
                                    </a>
                                    ,{" "}
                                    <a href="http://en.wikipedia.org/wiki/">
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
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div class="u-layout">
                <div class="u-layout-col">
                  <div class="u-size-30">
                    <div class="u-layout-row">
                      <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                        <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-container-layout-1">
                          <img
                            src={Dev}
                            width="300"
                            style={{ textAlign: "center", margin: "0 auto" }}
                          />
                        </div>
                      </div>

                      <div class="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
                        <div class="u-container-layout u-valign-middle u-container-layout-2">
                          <h2 class="u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                            Asqar Arslonov
                          </h2>
                          <h5 class="u-custom-font u-font-raleway">
                            Full-Stack (MERN) Developer
                          </h5>
                          <p class="u-align-justify u-custom-font u-font-montserrat u-text u-text-3">
                            Having started his IT-education at the age of 12,
                            Asqarjon has reached the level of full-stack
                            developer just 2 years later. Taking several online
                            courses (Technical Support Fundamentals, Computer
                            Networking) was followed by successful completion of
                            Front-End Development and Back-End Development
                            courses at the Open Web Academy education center in
                            Qarshi city. Being an eighth-grader, he is fully
                            responsible for the technical support of Leksika.uz.
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
      </div>
      <div>
        <div class="footer" style={{marginTop: "100px"}}>

        </div>
      </div>
    </div>
  );
};
