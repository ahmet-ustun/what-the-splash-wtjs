import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImagesData } from '../../store/actions';
import { Button } from '../Button';
import { Stats } from '../Stats';

import './styles.css';

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { isLoading, images, error, loadImages, stats } = this.props;

    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <Stats stats={stats[image.id]} />
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
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
