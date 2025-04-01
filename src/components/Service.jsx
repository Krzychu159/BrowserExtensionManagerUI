const Service = ({ service, removeService, onToggle }) => {
  return (
    <div className="serviceBox">
      <div className="infoLine">
        <div>
          <img src={service.logo} alt="" />
        </div>
        <div>
          <div className="serviceName">{service.name}</div>
          <div className="serviceDescription">{service.description}</div>{" "}
        </div>
      </div>
      <div className="modeLine">
        <div>
          <button onClick={() => removeService(service.id)}>Remove</button>
        </div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={service.active}
              onChange={() => onToggle(service.id)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Service;
