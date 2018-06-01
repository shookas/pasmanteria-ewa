import React, { Component } from 'react';

export default class FooterOpinions extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <section className="4u mobile">
        <header>
          <h2 className="icon fa-thumbs-up circled">
            <span className="label">Opinnie</span>
          </h2>
        </header>
        <ul className="divided">
          <li>
            <article className="post stub">
              <header>
                <h3>
                  <a>Bardzo miła obasługa</a>
                </h3>
              </header>
              {/* <span className="timestamp">3 hours ago</span> */}
            </article>
          </li>
          <li>
            <article className="post stub">
              <header>
                <h3>
                  <a>Polecamy!</a>
                </h3>
              </header>
              {/* <span className="timestamp">6 hours ago</span> */}
            </article>
          </li>
          <li>
            <article className="post stub">
              <header>
                <h3>
                  <a>Zawsze doradzimy</a>
                </h3>
              </header>
              {/* <span className="timestamp">Yesterday</span> */}
            </article>
          </li>
          <li>
            <article className="post stub">
              <header>
                <h3>
                  <a>Duży wybór</a>
                </h3>
              </header>
              {/* <span className="timestamp">2 days ago</span> */}
            </article>
          </li>
        </ul>
      </section>
    );
  }
}
