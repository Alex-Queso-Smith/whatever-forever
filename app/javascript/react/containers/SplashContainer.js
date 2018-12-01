import React from 'react';

import Modal from '../components/Modal';

class SplashContainer extends React.Component {
  state = {
    showModal: false
  }

  showDropModal = this.showDropModal.bind(this);
  closeDropModal = this.closeDropModal.bind(this);

  showDropModal(){
    this.setState({ showModal: !this.state.showModal })
    document.body.classList.add("whatever-modal-locked");
  }

  closeDropModal(){
    this.setState({ showModal: !this.state.showModal })
    document.body.classList.remove("whatever-modal-locked");
  }

  render(){
    var dropModal;

    if (this.state.showModal) {
      dropModal =
      <Modal
        handleClose={this.closeDropModal}
      >
        <img src="/assets/6godbart-con" />
      </Modal>
    }

    return(
      <div id="splash-container" >
        {dropModal}
        <div id="splash-grid" className="grid-container">
          <div className="grid-x">
            <div className="cell medium-4 text-center">
              <a href="https://gz1.bigcartel.com/" >
                <button id="side-button-one" className="side-button text-center" >
                  Shop
                </button>
              </a>
            </div>
            <div className="cell medium-4 text-center">
              <button className="side-button text-center" >
                Gallery
              </button>
            </div>
            <div className="cell medium-4 text-center">
              <button onClick={this.showDropModal} className="side-button text-center" >
                Upcoming
              </button>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright &copy; 2018 whateverforever</p>
      </div>
    )
  }
}

export default SplashContainer
