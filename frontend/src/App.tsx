import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { NotFound } from "./pages/NotFound";
import { Landing } from "./pages/Landing";
import { AppBar } from "./Components/AppBar";
import { PublicRoute } from "./Routes/PublicRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <AppBar />
    <div className="mt-16">{children}</div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />

        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <Layout>
                <Blogs />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <PrivateRoute>
              <Layout>
                <Blog />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/publish"
          element={
            <PrivateRoute>
              <Layout>
                <Publish />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
