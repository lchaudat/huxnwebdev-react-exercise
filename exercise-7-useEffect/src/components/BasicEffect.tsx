import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("page initialized");
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
