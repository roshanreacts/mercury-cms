"use client";

import React, { useState, useEffect } from "react";
const useQuery = (promise: Promise<any>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    promise
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setData(null);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
};

// write a hook which takes a promise and returns the data, loading and error but triggers the promise only when a callback is called

const useLazyQuery = (promise: any): any[] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>(null);

  const execute = (...args: any) => {
    setLoading(true);
    setError(null);
    promise(...args)
      .then((data: any) => {

        if (data.error) {
          throw data.error
        }

        if (data == null) {
          setData(true);
        } else {
          setData(data);
        }
        setError(null);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log("::err", err);
        setError(err);
        setData(null);
        setLoading(false);
      });
  };

  return [execute, { loading, error, data }];
};

export { useQuery, useLazyQuery };
