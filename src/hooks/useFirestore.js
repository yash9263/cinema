import { useState, useEffect } from "react";
import { db, authService } from "../firebase-config";

const useFirestore = (collection) => {
  const [movieList, setMovieList] = useState([]);
  const user = authService.currentUser;
  useEffect(() => {
    if (user) {
      db.collection(`accounts/${user.uid}/${collection}`).onSnapshot(
        (querySnapshot) => {
          let documents = [];
          querySnapshot.forEach((doc) => {
            documents.push({ ...doc.data() });
          });
          setMovieList(documents);
        }
      );
    }
    return () => {};
  }, [user, collection]);
  return { movieList };
};

export default useFirestore;
