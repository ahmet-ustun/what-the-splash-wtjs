import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';

import { loadImagesData } from '../../store/actions';
import { Button } from '../Button';
import { Stats } from '../Stats';

import './styles.css';

class ImageGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLightboxOpened: false,
      selectedImageUrl: '',
      selectedImageAlt: '',
    };
  }

  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { isLoading, images, error, loadImages, stats } = this.props;
    const { isLightboxOpened, selectedImageUrl, selectedImageAlt } = this.state;

    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;
    const isTablet = resolution >= 768 && resolution <= 1024;
    const isDesktop = !isMobile && !isTablet;

    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
              onClick={() =>
                this.setState({
                  isLightboxOpened: true,
                  selectedImageUrl: image.urls.regular,
                  selectedImageAlt: image['alt_description'],
                })
              }
            >
              <Stats stats={stats[image.id]} />
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {isDesktop && isLightboxOpened && (
          <Lightbox
            mainSrc={selectedImageUrl}
            imageTitle={selectedImageAlt}
            enableZoom={false}
            onCloseRequest={() =>
              this.setState({
                isLightboxOpened: false,
                selectedImageUrl: '',
                selectedImageAlt: '',
              })
            }
          />
        )}
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button
          onClick={() => !isLoading && loadImages()}
          isLoading={isLoading}
        >
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error, stats }) => ({
  isLoading,
  images,
  error,
  stats,
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImagesData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageGrid);
