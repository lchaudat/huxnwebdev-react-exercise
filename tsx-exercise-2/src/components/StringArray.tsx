import { useState } from "react";

interface StringArray {
  list: string[];
}

const StringArray = () => {
  const [list, setList] = useState<StringArray[]>([
    { list: ["adsfs", "dasfa"] },
  ]);
  return <div>StringArray</div>;
};
export default StringArray;
