import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "unfonts.css";
import "./index.css";

function bootstrap() {
	const container = document.getElementById("root") as Element;

	if (!container.innerHTML) {
		const root = createRoot(container);
		root.render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	}
}

bootstrap();
