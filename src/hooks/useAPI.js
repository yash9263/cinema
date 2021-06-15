import { useEffect, useState } from "react";
import { authService } from "../firebase-config";
import useFirestore from "./useFirestore";

const useApi = (url, page = 1) => {
  const [docs, setDocs] = useState([]);
  const user = authService.currentUser;
  const { movieList } = useFirestore("watchlist");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let documents = [];
        data.results.forEach((doc) => {
          if (user) {
            const found = movieList.some((el) => el.id === doc.id);
            if (!found) {
              documents.push({ ...doc });
            }
          } else {
            documents.push({ ...doc });
          }
        });
        setDocs(documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, movieList, user]);

  return { docs };
};

export default useApi;
