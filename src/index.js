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
import {DataProvider} from "./context/DataContext";

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
