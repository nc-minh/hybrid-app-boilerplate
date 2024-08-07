import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { GlobalStyles } from "@core/styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GlobalStyles>
      <RouterProvider router={router} />
    </GlobalStyles>
 ,
);
