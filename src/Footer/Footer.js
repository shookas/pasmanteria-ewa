import React, { Component } from 'react';
import './Footer.scss';

import FooterGallery from './FooterGallery/FooterGallery';
import FooterOpinions from './FooterOpinions/FooterOpinions';
import FooterPosts from './FooterPosts/FooterPosts';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row row--spread flex--mobile">
            {/* <FooterPosts /> */}
            <FooterOpinions />
            <FooterGallery items={this.props.config.galleryItems} />
          </div>
          <hr />
          <div className="row">
            <div className="12u">
              {/* // Contact */}
              <section className="contact">
                <header>
                  <h3>Zainteresowni naszą oferą?</h3>
                </header>
                <p>Śledź nas na portalach społecznościowych</p>
                <ul className="icons">
                  <li>
                    <a href="https://www.facebook.com/Pasmanteria-Ewa-Szuka%C5%82a-401835093244229" target="_blank" className="icon fa-facebook">
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon fa-pinterest">
                      <span className="label">Pinterest</span>
                    </a>
                  </li>
                </ul>
              </section>

              {/* // Copyright */}
              <div className="copyright">
                <ul className="menu">
                  <li>&copy; Pasmanteria Ewa. All rights reserved.</li>
                  <li>
                    Design: <a>Piotr Szukała</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
