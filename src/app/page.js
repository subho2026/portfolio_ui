"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import { useEffect, useState } from "react";
import getPortfolioDetails from "../../state/action";
import Link from "next/link";

export default function Home() {
  const [portfolioDetails, setPortfolioDetails] = useState({});

  useEffect(() => {
    getPortfolioDetails(1).then((response) =>
      setPortfolioDetails(response.data)
    );
  }, []);

  return (
    <>
      <Header />
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={portfolioDetails?.about?.[0].primary_image}
            alt="Profile Picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">
            {portfolioDetails?.about?.[0].firstname}
            {portfolioDetails?.about?.[0].lastname}
          </h1>
          <p className="section__text__p2">
            {portfolioDetails?.about?.[0].designation}
          </p>
          <div className="btn-container">
            {portfolioDetails?.about?.[0]?.cv_url ? (
              <Link href={portfolioDetails.about[0].cv_url} target="_blank">
                <a className="btn btn-color-2">Download CV</a>
              </Link>
            ) : (
              <p>CV URL is not available</p>
            )}
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>

          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onclick="location.href='https://linkedin.com/'"
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
              onclick="location.href='https://github.com/'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <br />
                <p>+4 years as a Support Specialist</p>
              </div>
              <div className="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  <br />
                  {portfolioDetails?.education?.[0].degree}
                  <br />
                  <br />
                  {portfolioDetails?.education?.[1].degree}
                </p>
              </div>
            </div>
            <div className="text-container">
              <br />
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  marginBottom: "2px",
                  padding: "0.5rem",
                  textAlign: "justify",
                  fontWeight: "bold",
                }}
              >
                {portfolioDetails?.about?.[0].about}
              </p>

              <br />
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#skills'"
        />
      </section>

      <section id="skills">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Technical Skills</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>{portfolioDetails?.skill?.[0].level}</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>
                      {portfolioDetails?.skill?.map((item) => {
                        return item.level;
                        <br />;
                      })}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container" style={{ textAlign: "left" }}>
              <div className="article-container" style={{ textAlign: "left" }}>
                {portfolioDetails?.professionalexperience?.map(
                  (item, index) => (
                    <article key={index}>
                      <img
                        src="./assets/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                      />
                      <div className="experience-item">
                        <h2 className="experience-company">{item.company}</h2>

                        <h3 className="experience-profile">{item.profile}</h3>

                        <p
                          style={{
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            marginBottom: "2px",
                            padding: "0.5rem",
                            textAlign: "justify",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <div>
                  <img
                    src={portfolioDetails?.project?.[0].thumbnail}
                    alt="project1"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
              </div>
              <h2 className="experience-sub-title project-title">
                {portfolioDetails?.project?.[0].name || "Default Name"}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='#'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={portfolioDetails?.project?.[1].thumbnail}
                  alt="project1"
                  style={{ width: "200px", height: "150px" }} // Set the desired width and height
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {portfolioDetails?.project?.[1].name || "Default Name"}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github\
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo\
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={portfolioDetails?.project?.[2].thumbnail}
                  alt="project1"
                  style={{ width: "200px", height: "150px" }}
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {portfolioDetails?.project?.[2].name || "Default Name"}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github\
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo\
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <Link href="mailto:examplemail@gmail.com">Example@gmail.com</Link>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <Link href="https://www.linkedin.com">LinkedIn</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
