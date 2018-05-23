import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

class App extends Component {
  componentDidMount() {
    require('./libs/jquery.dropotron.min.js');
    require('./libs/jquery.scrolly.min.js');
	require('./libs/jquery.onvisible.min.js');
	require('./libs/util.js');
	require('./libs/main.js');

  }

  render() {
    return (
      <div id="page-wrapper">
        {/* //Header */}
        <div id="header">
          {/* // Inner */}
          <div className="inner">
            <header>
              <h1>
                <a href="index.html" id="logo">
                  Helios
                </a>
              </h1>
              <hr />
              <p>Another fine freebie by HTML5 UP</p>
            </header>
            <footer>
              <a href="#banner" className="button circled scrolly">
                Start
              </a>
            </footer>
          </div>

          {/* // Nav */}
          <nav id="nav">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Dropdown</a>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum dolor</a>
                  </li>
                  <li>
                    <a href="#">Magna phasellus</a>
                  </li>
                  <li>
                    <a href="#">Etiam dolore nisl</a>
                  </li>
                  <li>
                    <a href="#">And a submenu &hellip;</a>
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Phasellus consequat</a>
                      </li>
                      <li>
                        <a href="#">Magna phasellus</a>
                      </li>
                      <li>
                        <a href="#">Etiam dolore nisl</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Veroeros feugiat</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="left-sidebar.html">Left Sidebar</a>
              </li>
              <li>
                <a href="right-sidebar.html">Right Sidebar</a>
              </li>
              <li>
                <a href="no-sidebar.html">No Sidebar</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* // Banner */}
        <section id="banner">
          <header>
            <h2>
              Hi. You're looking at <strong>Helios</strong>.
            </h2>
            <p>
              A (free) responsive site template by{' '}
              <a href="http://html5up.net">HTML5 UP</a>. Built on{' '}
              <strong>skel</strong> and released under the{' '}
              <a href="http://html5up.net/license">CCA</a> license.
            </p>
          </header>
        </section>

        {/* // Carousel */}
        <section className="carousel">
          <div className="reel">
            <article>
              <a href="#" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Pulvinar sagittis congue</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Fermentum sagittis proin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Sed quis rhoncus placerat</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic04.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Ultrices urna sit lobortis</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic05.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Varius magnis sollicitudin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Pulvinar sagittis congue</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Fermentum sagittis proin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Sed quis rhoncus placerat</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic04.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Ultrices urna sit lobortis</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic05.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Varius magnis sollicitudin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>
          </div>
        </section>

        {/* // Main */}
        <div className="wrapper style2">
          <article id="main" className="container special">
            <a href="#" className="image featured">
              <img src="images/pic06.jpg" alt="" />
            </a>
            <header>
              <h2>
                <a href="#">Sed massa imperdiet magnis</a>
              </h2>
              <p>
                Sociis aenean eu aenean mollis mollis facilisis primis ornare
                penatibus aenean. Cursus ac enim pulvinar curabitur morbi
                convallis. Lectus malesuada sed fermentum dolore amet.
              </p>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit. Curae
              suspendisse mauris posuere accumsan massa posuere lacus convallis
              tellus interdum. Amet nullam fringilla nibh nulla convallis ut
              venenatis purus sit arcu sociis. Nunc fermentum adipiscing tempor
              cursus nascetur adipiscing adipiscing. Primis aliquam mus lacinia
              lobortis phasellus suscipit. Fermentum lobortis non tristique ante
              proin sociis accumsan lobortis. Auctor etiam porttitor phasellus
              tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat
              integer interdum integer purus sapien. Nibh eleifend nulla
              nascetur pharetra commodo mi augue interdum tellus. Ornare cursus
              augue feugiat sodales velit lorem. Semper elementum ullamcorper
              lacinia natoque aenean scelerisque.
            </p>
            <footer>
              <a href="#" className="button">
                Continue Reading
              </a>
            </footer>
          </article>
        </div>

        {/* // Features */}
        <div className="wrapper style1">
          <section id="features" className="container special">
            <header>
              <h2>Morbi ullamcorper et varius leo lacus</h2>
              <p>
                Ipsum volutpat consectetur orci metus consequat imperdiet duis
                integer semper magna.
              </p>
            </header>
            <div className="row">
              <article className="4u 12u(mobile) special">
                <a href="#" className="image featured">
                  <img src="images/pic07.jpg" alt="" />
                </a>
                <header>
                  <h3>
                    <a href="#">Gravida aliquam penatibus</a>
                  </h3>
                </header>
                <p>
                  Amet nullam fringilla nibh nulla convallis tique ante proin
                  sociis accumsan lobortis. Auctor etiam porttitor phasellus
                  tempus cubilia ultrices tempor sagittis. Nisl fermentum
                  consequat integer interdum.
                </p>
              </article>
              <article className="4u 12u(mobile) special">
                <a href="#" className="image featured">
                  <img src="images/pic08.jpg" alt="" />
                </a>
                <header>
                  <h3>
                    <a href="#">Sed quis rhoncus placerat</a>
                  </h3>
                </header>
                <p>
                  Amet nullam fringilla nibh nulla convallis tique ante proin
                  sociis accumsan lobortis. Auctor etiam porttitor phasellus
                  tempus cubilia ultrices tempor sagittis. Nisl fermentum
                  consequat integer interdum.
                </p>
              </article>
              <article className="4u 12u(mobile) special">
                <a href="#" className="image featured">
                  <img src="images/pic09.jpg" alt="" />
                </a>
                <header>
                  <h3>
                    <a href="#">Magna laoreet et aliquam</a>
                  </h3>
                </header>
                <p>
                  Amet nullam fringilla nibh nulla convallis tique ante proin
                  sociis accumsan lobortis. Auctor etiam porttitor phasellus
                  tempus cubilia ultrices tempor sagittis. Nisl fermentum
                  consequat integer interdum.
                </p>
              </article>
            </div>
          </section>
        </div>

        {/* // Footer */}
        <div id="footer">
          <div className="container">
            <div className="row">
              // Tweets
              <section className="4u 12u(mobile)">
                <header>
                  <h2 className="icon fa-twitter circled">
                    <span className="label">Tweets</span>
                  </h2>
                </header>
                <ul className="divided">
                  <li>
                    <article className="tweet">
                      Amet nullam fringilla nibh nulla convallis tique ante
                      sociis accumsan.
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
                  <div className="6u">
                    <a href="#" className="image fit">
                      <img src="images/pic10.jpg" alt="" />
                    </a>
                  </div>
                  <div className="6u$">
                    <a href="#" className="image fit">
                      <img src="images/pic11.jpg" alt="" />
                    </a>
                  </div>
                  <div className="6u">
                    <a href="#" className="image fit">
                      <img src="images/pic12.jpg" alt="" />
                    </a>
                  </div>
                  <div className="6u$">
                    <a href="#" className="image fit">
                      <img src="images/pic13.jpg" alt="" />
                    </a>
                  </div>
                  <div className="6u">
                    <a href="#" className="image fit">
                      <img src="images/pic14.jpg" alt="" />
                    </a>
                  </div>
                  <div className="6u$">
                    <a href="#" className="image fit">
                      <img src="images/pic15.jpg" alt="" />
                    </a>
                  </div>
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
      </div>
    );
  }
}

export default App;
