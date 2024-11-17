import { useEffect, useState } from "react";

interface postData {
  userID: number;
  id: number;
  title: string;
  message: string;
}

const [data, setData] = useState([]);

const FecthDataEffect = () => {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json;

      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return <div>FecthDataEffect</div>;
};

export default FecthDataEffect;
