import React, { Component } from 'react';
import './Footer.scss';

import FooterGallery from './FooterGallery/FooterGallery';

class Footer extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <section className="4u 12u(mobile)">
              <header>
                <h2 className="icon fa-twitter circled">
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
            {/* // Posts */}
            <section className="4u 12u(mobile)">
              <header>
                <h2 className="icon fa-file circled">
                  <span className="label">Posts</span>
                </h2>
              </header>
              <ul className="divided">
                <li>
                  <article className="post stub">
                    <header>
                      <h3>
                        <a href="#">Nisl fermentum integer</a>
                      </h3>
                    </header>
                    <span className="timestamp">3 hours ago</span>
                  </article>
                </li>
                <li>
                  <article className="post stub">
                    <header>
                      <h3>
                        <a href="#">Phasellus portitor lorem</a>
                      </h3>
                    </header>
                    <span className="timestamp">6 hours ago</span>
                  </article>
                </li>
                <li>
                  <article className="post stub">
                    <header>
                      <h3>
                        <a href="#">Magna tempus consequat</a>
                      </h3>
                    </header>
                    <span className="timestamp">Yesterday</span>
                  </article>
                </li>
                <li>
                  <article className="post stub">
                    <header>
                      <h3>
                        <a href="#">Feugiat lorem ipsum</a>
                      </h3>
                    </header>
                    <span className="timestamp">2 days ago</span>
                  </article>
                </li>
              </ul>
            </section>
            {/* // Photos */}
            <section className="4u 12u(mobile)">
              <header>
                <h2 className="icon fa-camera circled">
                  <span className="label">Photos</span>
                </h2>
              </header>
              <div className="row 25%">
              {this.props.config.galleryItems.map((item, i) => {
                return <FooterGallery image={item.image} key={i}/>
              })}
              </div>
            </section>
          </div>
          <hr />
          <div className="row">
            <div className="12u">
              {/* // Contact */}
              <section className="contact">
                <header>
                  <h3>Nisl turpis nascetur interdum?</h3>
                </header>
                <p>
                  Urna nisl non quis interdum mus ornare ridiculus egestas
                  ridiculus lobortis vivamus tempor aliquet.
                </p>
                <ul className="icons">
                  <li>
                    <a href="#" className="icon fa-twitter">
                      <span className="label">Twitter</span>
                    </a>
                  </li>
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
                  <li>
                    <a href="#" className="icon fa-dribbble">
                      <span className="label">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon fa-linkedin">
                      <span className="label">Linkedin</span>
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
