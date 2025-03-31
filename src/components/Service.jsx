const Service = ({ service, removeService }) => {
  return (
    <div className="serviceBox">
      <div className="infoLine">
        <div>
          <img src={service.logo} alt="" />
        </div>
        <div>
          <div>{service.name}</div>
          <div>{service.description}</div>{" "}
        </div>
      </div>
      <div className="modeLine">
        <div>
          <button onClick={() => removeService(service.id)}>Remove</button>
        </div>
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Service;
