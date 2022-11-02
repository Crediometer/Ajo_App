import './TransferModal.css';
const TransferModal = () => {
    return ( 
        <div className="modal-background">
            <div className="modal-container">
                <div className="successfull-statement">
                    <p>You successefully<br></br>Sent N30,000 to </p>
                </div>
                <div className="successfull-image">
                    <img src=''></img>
                </div>
                <p className="successful-name">Ruth<br></br>Olaleye</p>
                <div className="successfull-message">
                    <p>Enjoy yourself at the movies<br></br>Download receipt here</p>
                </div>
                <div className="successfull-button">
                    <button>Done</button>
                </div>
            </div>
        </div>
     );
}
 
export default TransferModal;