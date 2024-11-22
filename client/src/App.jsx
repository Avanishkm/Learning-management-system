import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <HeroSection />
              {/* Courses */}
            </>
          ),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
