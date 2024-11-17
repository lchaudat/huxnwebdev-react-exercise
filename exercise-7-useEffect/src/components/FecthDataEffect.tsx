import { useEffect, useState } from "react";

interface postData {
  userID: number;
  id: number;
  title: string;
  body: string;
}

const FecthDataEffect = () => {
  const [data, setData] = useState<postData[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          <li>{item.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default FecthDataEffect;
