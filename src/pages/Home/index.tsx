/* eslint-disable */

import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <main>
            <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-light fixed-top">
              <div className="container">
                <a className="navbar-brand text-primary" href="index.html">
                  SB UI Kit Pro
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i data-feather="menu"></i>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mr-lg-5">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Home{' '}
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-xl no-caret">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownDemos"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Landings
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n25 mr-xl-n15"
                        aria-labelledby="navbarDropdownDemos"
                      >
                        <div className="row no-gutters">
                          <div
                            className="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block"
                            style={{
                              backgroundImage: `url('assets/img/backgrounds/bg-dropdown-xl.jpg')`,
                            }}
                          >
                            <div className="d-flex h-100 w-100 align-items-center justify-content-center">
                              <div className="text-white text-center z-1">
                                <div className="mb-3">
                                  Multipurpose landing pages for a variety of
                                  projects.
                                </div>
                                <a
                                  className="btn btn-white btn-sm text-primary font-weight-500"
                                  href="index.html"
                                >
                                  View All
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7 p-lg-5">
                            <div className="row">
                              <div className="col-lg-6">
                                <h6 className="dropdown-header text-primary">
                                  Applications
                                </h6>
                                <a
                                  className="dropdown-item"
                                  href="landing-app-mobile.html"
                                >
                                  Mobile App
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-app-desktop.html"
                                >
                                  Desktop App
                                </a>
                                <div className="dropdown-divider border-0"></div>
                                <h6 className="dropdown-header text-primary">
                                  Business
                                </h6>
                                <a
                                  className="dropdown-item"
                                  href="landing-multipurpose.html"
                                >
                                  Multipurpose
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-agency.html"
                                >
                                  Agency
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-press.html"
                                >
                                  Press
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-directory.html"
                                >
                                  Directory
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-rental.html"
                                >
                                  Rental
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-real-estate.html"
                                >
                                  Real Estate
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-classifieds.html"
                                >
                                  Classifieds
                                </a>
                                <div className="dropdown-divider border-0"></div>
                                <h6 className="dropdown-header text-primary">
                                  Lead Generation
                                </h6>
                                <a
                                  className="dropdown-item"
                                  href="landing-lead-capture.html"
                                >
                                  Lead Capture
                                </a>
                                <div className="dropdown-divider border-0 d-lg-none"></div>
                              </div>
                              <div className="col-lg-6">
                                <h6 className="dropdown-header text-primary">
                                  Personal
                                </h6>
                                <a
                                  className="dropdown-item"
                                  href="landing-resume.html"
                                >
                                  Resume
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="landing-portfolio.html"
                                >
                                  Portfolio
                                </a>
                                <div className="dropdown-divider border-0"></div>
                                <h6 className="dropdown-header text-primary">
                                  Header Styles
                                </h6>
                                <a
                                  className="dropdown-item"
                                  href="header-basic.html"
                                >
                                  Basic
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="header-basic-signup.html"
                                >
                                  Basic (Signup)
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="header-graphic.html"
                                >
                                  Graphic
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="header-graphic-signup.html"
                                >
                                  Graphic (Signup)
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="header-inner-page.html"
                                >
                                  Inner Page
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="header-nav-only.html"
                                >
                                  Nav Only
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown-xl no-caret">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownPages"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right mr-lg-n20 mr-xl-n15 animated--fade-in-up"
                        aria-labelledby="navbarDropdownPages"
                      >
                        <div className="row no-gutters">
                          <div className="col-lg-4 p-lg-5">
                            <h6 className="dropdown-header text-primary">
                              Company
                            </h6>
                            <a className="dropdown-item" href="page-basic.html">
                              Basic Page
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-company-about.html"
                            >
                              About
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-company-pricing.html"
                            >
                              Pricing
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-company-contact.html"
                            >
                              Contact
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-company-team.html"
                            >
                              Team
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-company-terms.html"
                            >
                              Terms
                            </a>
                            <div className="dropdown-divider border-0"></div>
                            <h6 className="dropdown-header text-primary">
                              Support
                            </h6>
                            <a
                              className="dropdown-item"
                              href="page-help-center.html"
                            >
                              Help Center
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-help-knowledgebase.html"
                            >
                              Knowledgebase
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-help-message-center.html"
                            >
                              Message Center
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-help-support-ticket.html"
                            >
                              Support Ticket
                            </a>
                            <div className="dropdown-divider border-0 d-lg-none"></div>
                          </div>
                          <div className="col-lg-4 p-lg-5">
                            <h6 className="dropdown-header text-primary">
                              Careers
                            </h6>
                            <a
                              className="dropdown-item"
                              href="page-careers-overview.html"
                            >
                              Careers List
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-careers-listing.html"
                            >
                              Position Details
                            </a>
                            <div className="dropdown-divider border-0"></div>
                            <h6 className="dropdown-header text-primary">
                              Blog
                            </h6>
                            <a
                              className="dropdown-item"
                              href="page-blog-overview.html"
                            >
                              Overview
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-blog-post.html"
                            >
                              Post
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-blog-archive.html"
                            >
                              Archive
                            </a>
                            <div className="dropdown-divider border-0"></div>
                            <h6 className="dropdown-header text-primary">
                              Portfolio
                            </h6>
                            <a
                              className="dropdown-item"
                              href="page-portfolio-grid.html"
                            >
                              Grid
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-portfolio-large-grid.html"
                            >
                              Large Grid
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-portfolio-masonry.html"
                            >
                              Masonry
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-portfolio-case-study.html"
                            >
                              Case Study
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-portfolio-project.html"
                            >
                              Project
                            </a>
                            <div className="dropdown-divider border-0 d-lg-none"></div>
                          </div>
                          <div className="col-lg-4 p-lg-5">
                            <h6 className="dropdown-header text-primary">
                              Error
                            </h6>
                            <a
                              className="dropdown-item"
                              href="page-error-400.html"
                            >
                              400 Error
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-error-401.html"
                            >
                              401 Error
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-error-404-1.html"
                            >
                              404 Error (Option 1)
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-error-404-2.html"
                            >
                              404 Error (Option 2)
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-error-500.html"
                            >
                              500 Error
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-error-503.html"
                            >
                              503 Error
                            </a>
                            <a
                              className="dropdown-item"
                              href="page-error-504.html"
                            >
                              504 Error
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown no-caret">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownDocs"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Documentation
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                        aria-labelledby="navbarDropdownDocs"
                      >
                        <a
                          className="dropdown-item py-3"
                          href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
                          target="_blank"
                        >
                          <div className="icon-stack bg-primary-soft text-primary mr-4">
                            <i data-feather="book-open"></i>
                          </div>
                          <div>
                            <div className="small text-gray-500">
                              Documentation
                            </div>
                            Usage instructions and reference
                          </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a
                          className="dropdown-item py-3"
                          href="https://docs.startbootstrap.com/sb-ui-kit-pro/components"
                          target="_blank"
                        >
                          <div className="icon-stack bg-primary-soft text-primary mr-4">
                            <i data-feather="code"></i>
                          </div>
                          <div>
                            <div className="small text-gray-500">
                              Components
                            </div>
                            Code snippets and reference
                          </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a
                          className="dropdown-item py-3"
                          href="https://docs.startbootstrap.com/sb-ui-kit-pro/changelog"
                          target="_blank"
                        >
                          <div className="icon-stack bg-primary-soft text-primary mr-4">
                            <i data-feather="file-text"></i>
                          </div>
                          <div>
                            <div className="small text-gray-500">Changelog</div>
                            Updates and changes
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <a
                    className="btn font-weight-500 ml-lg-4 btn-primary"
                    href="https://shop.startbootstrap.com/sb-ui-kit-pro"
                  >
                    Buy Now<i className="ml-2" data-feather="arrow-right"></i>
                  </a>
                </div>
              </div>
            </nav>
            <header className="page-header page-header-light bg-white">
              <div className="page-header-content pt-5">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-up">
                      <h1 className="page-header-title">
                        Build your next project faster with SB UI Kit Pro
                      </h1>
                      <p className="page-header-text mb-5">
                        Welcome to SB UI Kit Pro, a toolkit for building
                        beautiful web interfaces, created by the development
                        team at Start Bootstrap
                      </p>
                      <a
                        className="btn btn-lg btn-primary font-weight-500 mr-3"
                        href="landing-multipurpose.html"
                      >
                        View Demo
                        <i className="ml-2" data-feather="arrow-right"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary-soft text-primary font-weight-500"
                        href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
                      >
                        Documentation
                      </a>
                    </div>
                    <div
                      className="col-lg-6 d-none d-lg-block"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/illustrations/programming.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </header>
            <section className="bg-light py-10">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-10">
                      <div className="badge badge-pill badge-primary-soft text-primary badge-marketing mb-3">
                        12 Demos!
                      </div>
                      <h2>Landing Pages</h2>
                      <p className="lead">
                        When you purchase this UI Kit, you get access to a
                        robust suite of powerful landing page demos to help you
                        get started.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 1 - Multipurpose</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-multipurpose.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-multipurpose.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 2 - Mobile App</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-app-mobile.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-app-mobile.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 3 - Desktop App</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-app-desktop.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-app-desktop.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 4 - Agency</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-agency.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-agency.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 5 - Lead Capture</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-lead-capture.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-lead-capture.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 6 - Press</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-press.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-press.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 7 - Directory</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-directory.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-directory.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 8 - Rental</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-rental.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-rental.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 9 - Real Estate</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-real-estate.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-real-estate.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 10 - Classifieds</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-classifieds.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-classifieds.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 11 - Resume</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-resume.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-resume.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 12 - Portfolio</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="landing-portfolio.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/landing-portfolio.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>
            <section className="bg-white py-10">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-10">
                      <div className="badge badge-pill badge-primary-soft text-primary badge-marketing mb-3">
                        19 Pages!
                      </div>
                      <h2>Inner Pages</h2>
                      <p className="lead">
                        A group of pre-build inner page demos are available to
                        get your started when building out the rest of your
                        project!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Company Pages</h6>
                    <div className="list-group small shadow mb-5">
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-basic.html"
                      >
                        Basic Page
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-company-about.html"
                      >
                        About Page
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-company-pricing.html"
                      >
                        Pricing Page
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-company-contact.html"
                      >
                        Contact Page
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-company-terms.html"
                      >
                        Terms Page
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                    </div>
                    <h6 className="mb-3">Careers Pages</h6>
                    <div className="list-group small shadow">
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-careers-overview.html"
                      >
                        Careers List
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-careers-listing.html"
                      >
                        Position Details
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Support Pages</h6>
                    <div className="list-group small shadow mb-5">
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-help-center.html"
                      >
                        Help Center
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-help-knowledgebase.html"
                      >
                        Knowledgebase
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-help-message-center.html"
                      >
                        Message Center
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-help-support-ticket.html"
                      >
                        Support Ticket
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                    </div>
                    <h6 className="mb-3">Blog Pages</h6>
                    <div className="list-group small shadow">
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-blog-overview.html"
                      >
                        Overview
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-blog-post.html"
                      >
                        Post
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-blog-archive.html"
                      >
                        Archive
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Portfolio Pages</h6>
                    <div className="list-group small shadow">
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-portfolio-grid.html"
                      >
                        Grid
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-portfolio-large-grid.html"
                      >
                        Large Grid
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-portfolio-masonry.html"
                      >
                        Masonry
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-portfolio-case-study.html"
                      >
                        Case Study
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                      <a
                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                        href="page-portfolio-project.html"
                      >
                        Project
                        <i className="fas fa-arrow-right fa-xs text-gray-400"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>
            <section className="bg-light py-10">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-10">
                      <div className="badge badge-pill badge-primary-soft text-primary badge-marketing mb-3">
                        Customizable!
                      </div>
                      <h2>Header Examples</h2>
                      <p className="lead">
                        Build your own landing page by starting with one of
                        these customizable header examples! You can customize
                        the colors, content, borders, and more!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 1 - Basic</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="header-basic.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/header-basic.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 2 - Basic (Signup)</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="header-basic-signup.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/header-basic-signup.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 3 - Graphic</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="header-graphic.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/header-graphic.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 4 - Graphic (Signup)</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="header-graphic-signup.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/header-graphic-signup.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 5 - Inner Page</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="header-inner-page.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/header-inner-page.png"
                      />
                    </a>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-3">Demo 6 - Nav Only</h6>
                    <a
                      className="d-block rounded-lg lift lift-lg"
                      href="header-nav-only.html"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src="assets/img/demo/screenshots/header-nav-only.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>
            <section className="bg-white py-10">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-10">
                      <h2>Documentation</h2>
                      <p className="lead">
                        Comprehensive documentation includes usage instructions,
                        component reference, and utility class usage
                        instructions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 text-center mb-5">
                    <div className="display-1 font-weight-bold text-gray-400">
                      70+
                    </div>
                    <div className="h5">Custom/Extended Components</div>
                    <p>
                      We've extended and restyled Bootstrap's default
                      components, and built a suite of new custom components.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center mb-5">
                    <div className="display-1 font-weight-bold text-gray-400">
                      35+
                    </div>
                    <div className="h5">Pre-Built Page Examples</div>
                    <p>
                      Our pre-built page examples are a perfect way to get
                      inspired for creating new pages and views.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center mb-5">
                    <div className="display-1 font-weight-bold text-gray-400">
                      100+
                    </div>
                    <div className="h5">Custom/Extended Utilites</div>
                    <p>
                      We've extended and created new utility classes to give you
                      more control over your content with minimal custom CSS.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-primary font-weight-500"
                    href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
                  >
                    View Documentation
                  </a>
                </div>
              </div>
              <div className="svg-border-rounded text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>
          </main>
        </div>
        <div id="layoutDefault_footer">
          <footer className="footer pt-10 pb-5 mt-auto bg-light footer-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-brand">SB UI Kit Pro</div>
                  <div className="mb-3">Design made easy</div>
                  <div className="icon-list-social mb-5">
                    <a className="icon-list-social-link" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="icon-list-social-link" href="#!">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a className="icon-list-social-link" href="#!">
                      <i className="fab fa-github"></i>
                    </a>
                    <a className="icon-list-social-link" href="#!">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                      <div className="text-uppercase-expanded text-xs mb-4">
                        Product
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#!">Landing</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Pages</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Sections</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Documentation</a>
                        </li>
                        <li>
                          <a href="#!">Changelog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                      <div className="text-uppercase-expanded text-xs mb-4">
                        Technical
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#!">Documentation</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Changelog</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Theme Customizer</a>
                        </li>
                        <li>
                          <a href="#!">UI Kit</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                      <div className="text-uppercase-expanded text-xs mb-4">
                        Includes
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#!">Utilities</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Components</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Layouts</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Code Samples</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Products</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Affiliates</a>
                        </li>
                        <li>
                          <a href="#!">Updates</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="text-uppercase-expanded text-xs mb-4">
                        Legal
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#!">Privacy Policy</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!">Terms and Conditions</a>
                        </li>
                        <li>
                          <a href="#!">License</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-5" />
              <div className="row align-items-center">
                <div className="col-md-6 small">
                  Copyright &copy; Your Website 2021
                </div>
                <div className="col-md-6 text-md-right small">
                  <a href="#!">Privacy Policy</a>
                  &middot;
                  <a href="#!">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
