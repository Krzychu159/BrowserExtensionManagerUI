import Service from "./Service.jsx";

const Services = ({ services, removeService }) => {
  return (
    <div className="serviceContainer">
      {services.map((service) => (
        <Service
          key={service.id}
          service={service}
          removeService={removeService}
        />
      ))}
    </div>
  );
};

export default Services;
