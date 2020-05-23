import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import { IndexPageWrapper } from '../styles/index/IndexStyles';
import { CSSTransition } from 'react-transition-group';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import Twitter from '../images/svg/TwitterSVG';
import Instagram from '../images/svg/InstagramSVG';
import Linkedin from '../images/svg/LinkedinSVG';
import Github from '../images/svg/GithubSVG';
import Resume from '../images/svg/ResumeSVG';
const Index = ({ path, data }) => {
  const {
    miniBio,
    twitterURL,
    instagramURL,
    githubURL,
    linkedinURL,
  } = data.me.childMarkdownRemark.frontmatter;

  const seo = {
    page: 'index',
    title: '',
    description: `${miniBio}`,
    url: 'https://jacobdcastro.com',
    imgUrl: `${data.pageImg.publicURL}`,
    imgAlt:
      'jdcastro logo, twitter, instagram, facebook, github icons with @iamdarshshah username',
    breadcrumbs: [],
  };

  const one = () => (
    <Hi style={{ transitionDelay: '100ms' }}>
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <span>Hi!👋 I'm</span>
        <span>Hey!👋 I'm </span>
        <span> Hello!👋 I'm</span>
      </TextLoop>
    </Hi>
  );
  const two = () => (
    <Hi style={{ transitionDelay: '100ms' }}>
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <span>Software Developer 💻</span>
        <span>Full-Stack Developer 💻 </span>
        <span>Open Source Contributor 🚀</span>
      </TextLoop>
    </Hi>
  );

  return (
    <>
      <Layout seo={seo} path={path}>
        <IndexPageWrapper>
          <div className="indexIntro">
            <CSSTransition key="item" className="fadeup" timeout={3000}>
              {one()}
            </CSSTransition>
            <h1 className="headline">
              Darsh Shah,
              <br />
            </h1>
            <CSSTransition key="item" className="fadeup" timeout={3000}>
              {two()}
            </CSSTransition>
            <ul className="introSocialLinks">
              <li>
                <a
                  target="_blank"
                  href={twitterURL}
                  rel="noopener"
                  aria-label="My twitter profile"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={instagramURL}
                  rel="noopener"
                  aria-label="My Instagram page"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={linkedinURL}
                  rel="noopener"
                  aria-label="My linkedin profile"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={githubURL}
                  rel="noopener"
                  aria-label="My Github page"
                >
                  <Github />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={data.resume.publicURL}
                  rel="noopener"
                  aria-label="My Resume"
                >
                  <Resume />
                </a>
              </li>
            </ul>
          </div>
        </IndexPageWrapper>
      </Layout>
    </>
  );
};

const Hi = styled.h1`
  color: black;
  margin: 0 0 15px 0;
  font-weight: normal;

  span {
    font-size: 0.6em;
  }
`;

Index.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Index;

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    # social links from about markdown file
    me: file(relativePath: { eq: "me.md" }) {
      childMarkdownRemark {
        id
        frontmatter {
          email
          phone
          handle
          miniBio
          username
          twitterURL
          instagramURL
          githubURL
          facebookURL
          linkedinURL
        }
      }
    }

    pageImg: file(relativePath: { eq: "page-meta-img.jpg" }) {
      publicURL # used for SEO
    }

    resume: file(relativePath: { eq: "Resume.pdf" }) {
      publicURL
    }
  }
`;
