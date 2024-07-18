// TaskContext.js
import React, { createContext, useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tasksCollection = collection(db, "tasksjavascrip");
    const tasksQuery = query(tasksCollection, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(
      tasksQuery,
      (snapshot) => {
        const tasksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TaskContext.Provider>
  );
};
