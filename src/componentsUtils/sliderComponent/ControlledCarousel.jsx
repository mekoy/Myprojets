import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        index: 0,
        direction: null,
      };

      this.handleSelect = this.handleSelect.bind(this);
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <div className="container">
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/600x300"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/600x300"
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/600x300"
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }

  }
  
export default ControlledCarousel;