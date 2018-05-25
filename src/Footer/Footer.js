import React, { Component } from 'react';
import './Footer.scss';

import FooterGallery from './FooterGallery/FooterGallery';
import FooterOpinions from './FooterOpinions/FooterOpinions';

class Footer extends Component {
  constructor(props) {
    super();
    console.log(props)
  }
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <section className="4u 12u(mobile)">
              <header>
                <h2 className="icon fa-facebook circled">
                  <span className="label">Tweets</span>
                </h2>
              </header>
              <ul className="divided">
                <li>
                  <article className="tweet">
                    Amet nullam fringilla nibh nulla convallis tique ante sociis
                    accumsan.
                    <span className="timestamp">5 minutes ago</span>
                  </article>
                </li>
                <li>
                  <article className="tweet">
                    Hendrerit rutrum quisque.
                    <span className="timestamp">30 minutes ago</span>
                  </article>
                </li>
                <li>
                  <article className="tweet">
                    Curabitur donec nulla massa laoreet nibh. Lorem praesent
                    montes.
                    <span className="timestamp">3 hours ago</span>
                  </article>
                </li>
                <li>
                  <article className="tweet">
                    Lacus natoque cras rhoncus curae dignissim ultricies.
                    Convallis orci aliquet.
                    <span className="timestamp">5 hours ago</span>
                  </article>
                </li>
              </ul>
            </section>
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
                    <a href="#" className="icon fa-facebook">
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
                  <li>&copy; Untitled. All rights reserved.</li>
                  <li>
                    Design: <a href="http://html5up.net">HTML5 UP</a>
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
