import React from 'react';
import { PhotoCard, PhotoCardIMG } from './ImageGalleryItem.style';
import { ModalContainer } from 'components/Modal/Modal';

export class ImageGalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <PhotoCard>
        <PhotoCardIMG
          onClick={this.openModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
          width="100%"
          height="260px"
        />
        <ModalContainer
          largeImageURL={largeImageURL}
          isModalOpen={isModalOpen}
          onCloseModal={this.closeModal}
          tags={tags}
        />
      </PhotoCard>
    );
  }
}