/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [modalRef , setModalRef] = useState(useRef());
  const [modalRefEposta, setModalRefEposta] = useState(useRef());


  const modalGiris = () => {
    return (
      <div
        className="modal_fade"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div ref={modalRef} className="giris_modal">
          <div className="giris_modal_content">
            <span
              className="giris_modal_close"
              onClick={() => {
               modalRef.current.style.display = "none";
              }}
            >
              &times;
            </span>

            <a href="#" id="logo_modal">
              OlmasiGereken.com
            </a>
            <h4>Hemen Ederini Öğren!</h4>

            <h6 style={{ marginTop: 35 }}>
              <span className="dash">
                <span>HIZLICA BAĞLAN</span>
              </span>
            </h6>

            <button
              style={{ backgroundColor: "#3A5795" }}
              className="social_buttons"
            >
              {" "}
              Facebook ile devam et{" "}
            </button>

            <button
              style={{ backgroundColor: "#4285F4" }}
              className="social_buttons"
            >
              {" "}
              Google ile devam et{" "}
            </button>

            <button
              style={{ backgroundColor: "#000" }}
              className="social_buttons"
            >
              {" "}
              Apple ile devam et{" "}
            </button>

            <h6 style={{ marginTop: 35 }}>
              <span className="dash">
                <span>VEYA E-POSTANI KULLAN BAĞLAN</span>
              </span>
            </h6>

            <button
              style={{ backgroundColor: "#FF3F55" }}
              className="social_buttons"
              onClick={() => {
               modalRefEposta.current.style.display = "block";
               modalRef.current.style.display = "none";
              }}
            >
              {" "}
              E-posta ile devam et{" "}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const modalEpostaGiris  = () => {
    return (
      <div
       className="modal_fade"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div ref={modalRefEposta} className="giris_modal">
            <div className="giris_modal_content_eposta">
            <span
              className="giris_modal_close"
              onClick={() => {
              modalRefEposta.current.style.display = "none";
              modalRef.current.style.display = "block";
              }}
            >
              &times;
            </span>

            <h4 style={{ marginBottom: 35 }}>Hemen Ederini Öğren!</h4>
            <h6 style={{ marginBottom: 35 }}>
              Giriş yapmak veya hesap oluşturmak için e-posta adresini gir ve
              şifreni gir ve lütfen boş alan bırakma!
            </h6>
              {/* Boostrap form group */}
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
                <small id="emailHelp" class="form-text text-muted">
                  Email adresinizi asla kimseyle paylaşmayız.
                </small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <div class="form-check"></div>
            </form>

            <button
              style={{ backgroundColor: "#FF3F55" }}
                className="social_buttons"
              onClick={() => {}}
            >
              {" "}
              Hemen Kayıt Ol!{" "}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="topnav">
        <div className="container">
          <a
            onClick={() => {
             modalRef.current.style.display = "block";
            }}
          >
            Giriş
          </a>
          <a href="#">Sor</a>
          <a href="/" id="logo">
            OlmasiGereken.com
          </a>
        </div>
      </div>
      <div className="custom_hr"></div>

      <div className="navbar">
        <div className="container">
          <a href="#">Otomobil</a>
          <a href="#">Bilgisayar</a>
          <a href="#">Telefon</a>
          <a href="#">Aksesuar</a>
          <a href="#">Spor</a>
          <a href="#">Kozmetik</a>
          <a href="#">Kitap</a>
          <a href="#">Digital İçerik</a>
        </div>
      </div>

      {modalGiris()}
      {modalEpostaGiris()}
    </div>
  );
};

export default Header;
