import { useEffect, useState } from "react";

const useApi = (url, page = 1) => {
  const [docs, setDocs] = useState([]);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );

  useEffect(() => {
    window.addEventListener("storage", () => {
      setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
      console.log(wishlist);
    });

    return () => {
      window.removeEventListener("storage", () => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
      });
    };
  }, []);

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
          const found = wishlist.some((el) => el.id === doc.id);

          documents.push({ ...doc });
        });
        setDocs(documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, wishlist]);

  return { docs };
};

export default useApi;
