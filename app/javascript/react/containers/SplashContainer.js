import React from 'react';
import moment from 'moment';

import Modal from '../components/Modal';
import TimerContainer from './TimerContainer';
// import { DropTime } from '../components/DropTime';

class SplashContainer extends React.Component {
  state = {
    showModal: false,
    drops: [],
    latestDrop: {}
  }

  showDropModal = this.showDropModal.bind(this);
  closeDropModal = this.closeDropModal.bind(this);
  handleOutsideClick = this.handleOutsideClick.bind(this);

  componentDidMount(){
    fetch('/api/v1/drops.json', {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(dropData => {

      var { drops, latest_drop } = dropData

      this.setState({
        drops: drops,
        latestDrop: latest_drop
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  showDropModal(){
    this.setState({ showModal: !this.state.showModal })
    document.addEventListener('click', this.handleOutsideClick, false)
    document.body.classList.add("whatever-modal-locked");
  }

  closeDropModal(){
    this.setState({ showModal: !this.state.showModal })
    document.removeEventListener('click', this.handleOutsideClick, false)
    document.body.classList.remove("whatever-modal-locked");
  }

  handleOutsideClick(event) {
    if (!event.target.classList.value.includes("whatever-modal")) {
      return;
    } else {
      this.closeDropModal();
    }
  }

  render(){
    var dropModal;
    var { drops, latestDrop } = this.state;

    if (this.state.showModal) {
      if (this.state.latestDrop.pending) {
        var title = "Drop coming soon!"
        dropModal =
        <Modal
          handleClose={this.closeDropModal}
          title={title}
          >
        </Modal>
      } else {
        var { title, price, drop_date } = this.state.latestDrop
        dropModal =
        <Modal
          handleClose={this.closeDropModal}
          title={title}
          price={price.toFixed(2)}
          dropTime={drop_date}
          >
          <img className="modal-image" src={this.state.drops[0].image.asset.url} />
        </Modal>
      }
    }

    return(
      <div id="splash-container" >
        {dropModal}
        <div id="splash-grid" className="grid-container fluid">
          <div className="grid-x">
            <div className="cell medium-12 large-4 text-center">
              <a href="https://gz1.bigcartel.com/" >
                <button id="side-button-one" className="side-button text-center" >
                  Shop
                </button>
              </a>
            </div>
            <div className="cell medium-12 large-4 text-center">
              <a href="https://gz1.bigcartel.com/" >
                <button id="side-button-two" className="side-button text-center" onClick={this.backgroundChange} >
                  Gallery
                </button>
              </a>
            </div>
            <div className="cell medium-12 large-4 text-center">
              <button id="side-button-three" onClick={this.showDropModal} className="side-button text-center" >
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
