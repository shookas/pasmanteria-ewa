import React, { Component } from 'react';

export default class FooterPosts extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <section className="4u mobile">
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
    );
  }
}
