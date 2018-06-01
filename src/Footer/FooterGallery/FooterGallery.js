import React, { Component } from 'react';
import Viewer from 'react-viewer';
import FooterGalleryItem from './FooterGalleryItem';

export default class FooterGallery extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }

  viewItem(itemIndex) {
    this.setState({ visible: true, active: itemIndex });
  }

  render() {
    return (
      <section className="4u mobile">
        <header>
          <h2 className="icon fa-camera circled">
            <span className="label">Photos</span>
          </h2>
        </header>
        <div className="row 25%">
          {this.props.items.map((item, i) => {
            return (
              <FooterGalleryItem
                image={item.src}
                key={i}
                index={i}
                view={this.viewItem.bind(this)}
              />
            );
          })}
        </div>
        <Viewer
          visible={this.state.visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
          images={this.props.items}
          activeIndex={this.state.active}
          rotatable={false}
          scalable={false}
          onMaskClick={() => {
            this.setState({ visible: false });
          }}
        />
      </section>
    );
  }
}
