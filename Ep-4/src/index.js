
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './App';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={AppRouter} />)
