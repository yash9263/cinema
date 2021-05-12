import { useEffect, useState } from "react";

const useApi = (url, page = 1) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        // console.log(res.json());
        return res.json();
      })
      .then((data) => {
        let documents = [];
        // console.log(data);
        data.results.forEach((doc) => {
          documents.push({ ...doc });
        });
        setDocs(documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return { docs };
};

export default useApi;
