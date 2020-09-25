/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchArticles } from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';

const HomePage = props => {
  const [modal, setModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});

  const readArticle = article => {
    setCurrentArticle(article);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderArticles = () => {
    return props.articles.map(article => (
      <div className="col s12 m6 l6 xl4" key={article.title}>

      <div className="deneme">
      Reprehenderit quis ipsum nulla veniam sint magna ullamco ex laborum eu occaecat. Qui Lorem anim do aliquip et elit commodo dolor aliquip aliqua eu. Elit nostrud tempor mollit Lorem id cupidatat incididunt amet est commodo laboris consectetur occaecat sint. Aute ad minim incididunt mollit nisi ex eu eu id dolore magna eu ad enim. Voluptate et aliqua cillum Lorem aliqua adipisicing aliquip laboris officia. Fugiat anim qui aute ex ullamco exercitation. Occaecat dolor ullamco id elit adipisicing non labore sit commodo sit culpa est ad.
      </div>
        <div className="card large">
          <div className="card-image">
            <LazyLoadImage alt={article.title} src={article.urlToImage} />
          </div>
          <div className="card-content">
            <span className="card-title">{article.title}</span>
          </div>
          <div className="card-action">
            <a href="javascript:void(0)" onClick={() => readArticle(article)}>
              Read More
            </a>
          </div>
        </div>
      </div>
    ));
  };

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>OlmasiGereken.com</title>
        <meta property="og:title" content="OlmasiGereken.com" />
        <meta
          name="description"
          content="We present you what it supposed to be"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="" />
      </Helmet>
    );
  };

  const { fetchArticles: loadArticles } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);
  return (
    <div>
      {head()}
      {modal ? <ArticleDetailModal handler={closeModal} data={currentArticle} /> : null}
      <div className="row">
        <div className="section">
          <h3>Popular Articles</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  fetchArticles: PropTypes.func
};

HomePage.defaultProps = {
  articles: [],
  fetchArticles: null
};

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
};
