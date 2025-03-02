import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

export const useBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      })
      .then((res) => {
        setBlogs(res.data.records);
      })
      .catch((e) => {
        setError("Something Went Wrong", e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    blogs,
    error,
  };
};
export const useBlog = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      })
      .then((res) => {
        setBlog(res.data.record);
      })
      .catch((e) => {
        setError("Something Went Wrong", e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return {
    isLoading,
    blog,
    error,
  };
};
