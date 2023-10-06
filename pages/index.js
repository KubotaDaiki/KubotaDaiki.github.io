import Head from "next/head";
import { client } from "../libs/client";
import {} from "../libs/scripts.js";

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title>Kubota&apos;s Portfolio</title>
        <link rel="icon" type="image/x-icon" href={page.favicon.url} />
      </Head>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">久保田大貴</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={page.profile_icon.url}
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#top">
                トップ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                スキル
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="#certification-and-achievement"
              >
                資格&実績
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#works">
                制作物
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        {/* <!-- トップ--> */}
        <section className="resume-section" id="top">
          <div className="resume-section-content">
            <h1>{page.name}</h1>
            <p
              className="mb-4 ms-1"
              style={{ color: "#b8b8b8", fontSize: "1rem" }}
            >
              Email: {page.email}
            </p>
            <div
              className="mb-5"
              dangerouslySetInnerHTML={{ __html: page.self_introduction }}
            ></div>

            <div className="social-icons">
              {page.icon.map((icon) => (
                <a
                  className="social-icon"
                  href={icon.url}
                  title={icon.name}
                  key={icon.id}
                >
                  <img src={icon.img.url} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- スキル--> */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">スキル</h2>
            <div className="subheading mb-3">プログラミング言語＆ツール</div>
            <ul className="dev-icons">
              {page.skill.map((skill) => (
                <li className="list-inline" key={skill.id}>
                  <span className="fa-li">
                    <i className={skill.name}></i>
                  </span>
                  <span className="skill-description">{skill.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- 資格&実績--> */}
        <section className="resume-section" id="certification-and-achievement">
          <div className="resume-section-content">
            <div className="mb-5">
              <h2 className="mb-5">資格</h2>
              <ul className="fa-ul mb-0">
                {page.certification.map((certification) => (
                  <li className="mb-1" key={certification.id}>
                    <span className="fa-li">
                      <img src={certification.img.url} width={15}></img>
                    </span>
                    {certification.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h2 className="mb-5">実績</h2>
              <ul className="fa-ul mb-0">
                {page.achievement.map((achievement) => (
                  <li className="mb-2" key={achievement.id}>
                    <span className="fa-li">
                      <img src={achievement.img.url} width={20}></img>
                    </span>
                    {achievement.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- 制作物--> */}
        <section className="resume-section" id="works">
          <div className="resume-section-content">
            <h2 className="mb-5">制作物</h2>
            <div className="card-cotent">
              {page.works.map((works) => (
                <div className="l-wrapper_01" key={works.id}>
                  <article className="card_01">
                    <div className="card__header_01">
                      <p className="card__title_01">{works.name}</p>
                      <figure className="card__thumbnail_01">
                        <img
                          src={works.img.url}
                          alt="サムネイル"
                          className="card__image_01"
                        />
                      </figure>
                    </div>
                    <div className="card__body_01">
                      <p className="card__text2_01">{works.description}</p>
                    </div>
                    <div className="card__footer_01">
                      <p className="card__text_01">
                        <a href={works.url} className="button_01 -compact">
                          GitHub
                        </a>
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "top" });
  return {
    props: {
      page: data,
    },
  };
};
