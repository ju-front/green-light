import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WelcomePage from "./page/WelcomePage";
import SuccessPage from "./page/SuccessPage";
import OrderPage from "./page/OrderPage";
import NutrientAnalysisPage from "./page/NutrientAnalysisPage";
import AllergySelectPage from "./page/AllergySelectPage";
import BackApp from './backend/BackApp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/nutrient-analysis",
    element: <NutrientAnalysisPage />,
  },
  {
    path: "/allergy-select",
    element: <AllergySelectPage />,
  },
  {
    path: "/backApp",
    element: <BackApp />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
