import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<authPRovider> is wrapped above RouteProvider so that only an authorized user can access routes
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
