import Service from "./Service.jsx";
import Filters from "./Filters.jsx";

const Services = ({ services, removeService, onToggle }) => {
  return (
    <div className="serviceContainer">
      {services.map((service) => (
        <Service
          key={service.id}
          service={service}
          removeService={removeService}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Services;
