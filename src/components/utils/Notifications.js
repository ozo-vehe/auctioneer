const Notification = ({ text }) => (
  <div style={{position: "fixed", top: "0px", backgroundColor: "white", border: "thin solid black", width: "300px", paddingBlock: "10px", textTransform: "capitalize"}}>
    <i className="bi bi-check-circle-fill mx-2" />
    <span className="text-secondary mx-1">{text}</span>
  </div>
);

const NotificationSuccess = ({ text }) => (
  <div style={{position: "fixed", top: "0px", backgroundColor: "white", border: "thin solid black", width: "300px", paddingBlock: "10px", textTransform: "capitalize"}}>
    <i className="bi bi-check-circle-fill text-success mx-2" />
    <span className="text-secondary mx-1">{text}</span>
  </div>
);

const NotificationError = ({ text }) => (
  <div style={{position: "fixed", top: "0px", backgroundColor: "white", border: "thin solid black", width: "300px", paddingBlock: "10px", textTransform: "capitalize"}}>
    <i className="bi bi-x-circle-fill text-danger mx-2" />
    <span className="text-secondary mx-1">{text}</span>
  </div>
);

export { Notification, NotificationSuccess, NotificationError };