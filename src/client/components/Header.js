/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useVisible from "../../helpers/useVisible";
import useHover from '../../helpers/useHover';


const Header = () => {
  const [modalRef, setModalRef] = useState(useRef());
  const [modalRefEposta, setModalRefEposta] = useState(useRef());
  const [userSideBarRef, setUserSideBarRef] = useState(useRef());
  const [outsideRef, setOutsideRef] = useState(useRef());
  const [dropdownRef, setDropDownRef] = useState(useRef());

  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [hoverRef, isHovered] = useHover();

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

  const userSideBar = () => {
    return (
      <div className="modal_fade">
        {isVisible && (
          <div ref={ref} className="sidebar-content">
            <span
              className="giris_modal_close"
              onClick={() => {
                ref.current.style.width = "0";
              }}
            >
              &times;
            </span>

            <div className="sidebar-user-section">
              <span
                style={{
                  width: 100,
                  height: 100,
                  border: "1px solid white",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  marginTop: 50,
                }}
                class="material-icons md-96"
              >
                person
              </span>
            </div>

            <div>
              <a href="#">Keşfet</a>
            </div>

            <a href="#">Sohbet</a>
            <a href="#">Bildirimler</a>
            <a href="#">Profilim</a>
            <a href="#">Çıkış Yap</a>
          </div>
        )}
      </div>
    );
  };

  const modalEpostaGiris = () => {
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

  const hoverHelper = () =>{
   if(isHovered==true){
    dropdownRef.current.style.width ="500px";
   }

   //isHovered false style hatası var ;
  }
  return (
    <div>
      <div className="topnav">
        <div className="container">
          <span
            style={{
              color: "#fe3a56",
              float: "right",
              fontSize: 30,
              borderRadius: 50,
              border: "2px solid #fe3a56",
              fontWeight: 600,
            }}
            onClick={() => {
              setIsVisible(!isVisible);
              ref.current.style.width = "250px"; //açılırken transiction olmuyor
            }}
            class="material-icons"
          >
            person
          </span>
          <a
            onClick={() => {
              modalRef.current.style.display = "block";
              console.log(isVisible);
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
      <nav role="navigation" className="navbar">
        <div className="container">
       
        <ul>
          <li>
            <a href="#">One</a>
          </li>
          <li>
            <a href="#">Two</a>
            <ul className="dropdown" ref={dropdownRef} >
              <li ref={hoverRef} onClick={() => {
              
                dropdownRef.current.style.width = "500px"; //açılırken transiction olmuyor
              }}>
                <a href="#">Sub-1</a>
              </li>
              <li>
                <a href="#">Sub-2</a>
              </li>
              <li>
                <a href="#">Sub-3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Three</a>
          </li>
        </ul>
        </div>
      </nav>

      {console.log(isHovered)}


      {modalGiris()}
      {modalEpostaGiris()}
      {userSideBar()}
      {hoverHelper()}
    </div>
  );
};

export default Header;
