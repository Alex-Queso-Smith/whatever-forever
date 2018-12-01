import React from 'react';
import moment from 'moment';

import Modal from '../components/Modal';

class SplashContainer extends React.Component {
  state = {
    showModal: false,
    drops: []
  }

  showDropModal = this.showDropModal.bind(this);
  closeDropModal = this.closeDropModal.bind(this);

  // componentDidMount(){
  //   fetch('/api/v1/drops.json', {
  //     credentials: 'same-origin'
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //         error = new Error(errorMessage)
  //       throw(error)
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(dropData => {
  //
  //     this.setState({
  //       drops: dropData.drops
  //     })
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`))
  // }

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
    var now = moment().format()
    var { drops } = this.state;



    if (drops[0]) {
      var dropTime, seconds, days, weeks, future, difference, tester, dropMonth;
      dropTime = moment(this.state.drops[0].drop_date.replace('T', ' ').replace('.000Z', '') ).format('YYYY-MM-DD HH:mm:ss')
      future = moment(now).to(dropTime)
      tester = moment(now).calendar(dropTime)

      dropMonth = moment(dropTime).get('month')
      weekday = momenth(dropTime).weekday()
    }

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
