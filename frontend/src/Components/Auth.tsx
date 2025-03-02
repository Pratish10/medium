import { Link, useNavigate } from "react-router-dom";
import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";
import { useState } from "react";
import { SignUpTypes, SignInTypes } from "@paaro/medium-common";
import axios from "axios";
import { BACKEND_URL } from "@/config";

type postInputType = SignInTypes | SignUpTypes;

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<postInputType>(
    type === "signin"
      ? {
          email: "",
          password: "",
        }
      : {
          email: "",
          password: "",
          name: "",
        }
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type}`,
        postInputs
      );
      const token = response.data?.jwt;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center p-8 md:p-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            {type === "signup" ? "Create an account" : "Welcome back"}
          </h1>
          <p className="text-gray-500">
            {type === "signup" ? (
              <>
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-blue-600 underline underline-offset-4"
                >
                  Sign in
                </Link>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-blue-600 underline underline-offset-4"
                >
                  Sign up
                </Link>
              </>
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <Input
              label="Username"
              id="name"
              placeholder="Enter your name"
              required
              onChange={({ target: { value } }) =>
                setPostInputs((c) => ({ ...c, name: value }))
              }
            />
          )}

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="name@example.com"
            required
            onChange={({ target: { value } }) =>
              setPostInputs((c) => ({ ...c, email: value }))
            }
          />

          <div className="space-y-2">
            <Label htmlFor="password" className="block text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <input
                id="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="••••••••"
                required
                onChange={({ target: { value } }) =>
                  setPostInputs((c) => ({ ...c, password: value }))
                }
              />
            </div>
          </div>

          {type === "signin" && (
            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <Button type="submit">
            {type === "signup" ? "Create account" : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
};
