import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import LoadingSpinner from "@/components/loading-spinner";

function App() {
	return (
		<RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
	);
}

export default App;
