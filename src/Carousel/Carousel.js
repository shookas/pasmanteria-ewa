import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
  componentDidMount() {
    require('../libs/jquery.onvisible.min.js');

    var settings = {
      // Carousels
      carousels: {
        speed: 4,
        fadeIn: true,
        fadeDelay: 250
      }
    };
    // Carousels.
    const $ = window.$;
    const $window = $(window);

    $('.carousel').each(function() {
      var $t = $(this),
        $forward = $('<span class="forward"></span>'),
        $backward = $('<span class="backward"></span>'),
        $reel = $t.children('.reel'),
        $items = $reel.children('article');

      var pos = 0,
        leftLimit,
        rightLimit,
        itemWidth,
        reelWidth,
        timerId;

      // Items.
      if (settings.carousels.fadeIn) {
        $items.addClass('loading');

        $t.onVisible(function() {
          var timerId,
            limit = $items.length - Math.ceil($window.width() / itemWidth);

          timerId = window.setInterval(function() {
            var x = $items.filter('.loading'),
              xf = x.first();

            if (x.length <= limit) {
              window.clearInterval(timerId);
              $items.removeClass('loading');
              return;
            }

            xf.removeClass('loading');
          }, settings.carousels.fadeDelay);
        }, 50);
      }

      // Main.
      $t._update = function() {
        pos = 0;
        rightLimit = -1 * reelWidth + $window.width();
        leftLimit = 0;
        $t._updatePos();
      };

      $t._updatePos = function() {
        $reel.css('transform', 'translate(' + pos + 'px, 0)');
      };

      // Forward.
      $forward
        .appendTo($t)
        // .hide()
        .mouseenter(function(e) {
          timerId = window.setInterval(function() {
            pos -= settings.carousels.speed;

            if (pos <= rightLimit) {
              window.clearInterval(timerId);
              pos = rightLimit;
            }

            $t._updatePos();
          }, 10);
        })
        .mouseleave(function(e) {
          window.clearInterval(timerId);
        });

      // Backward.
      $backward
        .appendTo($t)
        // .hide()
        .mouseenter(function(e) {
          timerId = window.setInterval(function() {
            pos += settings.carousels.speed;

            if (pos >= leftLimit) {
              window.clearInterval(timerId);
              pos = leftLimit;
            }

            $t._updatePos();
          }, 10);
        })
        .mouseleave(function(e) {
          window.clearInterval(timerId);
        });

      // Init.
      $window.load(function() {
        reelWidth = $reel[0].scrollWidth;
        $window
          .resize(function() {
            reelWidth = $reel[0].scrollWidth;
            $t._update();
          })
          .trigger('resize');
      });
    });
  }

  render() {
    return (
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
    );
  }
}

export default Carousel;
