import React from "react";
import { getAllServices } from "../Api/Api";

function useServices() {
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getServices = async () => {
    await getAllServices().then((res) => {
      return res.message ? [] : res;
    });
  };

  React.useEffect(() => {
    loading &&
      getServices().then((res) => {
        setServices(res);
        setLoading(false);
      });
  }, [loading]);

  return {
    services,
    loading,
  };
}

export { useServices };
