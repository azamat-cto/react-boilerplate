import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFoundError() {
	const navigate = useNavigate();

	return (
		<div className="h-svh">
			<div className="flex flex-col items-center justify-center gap-2 h-full">
				<h1 className="text-[7rem] font-bold leading-tight">404</h1>
				<span className="font-medium">Oops! Page Not Found!</span>
				<p className="text-center text-muted-foreground">
					It seems like the page you're looking for <br /> does not exist or
					might have been removed.
				</p>
				<div className="flex items-center justify-center space-x-4 mt-6">
					<Button variant="outline" onClick={() => navigate(-1)}>
						Go Back
					</Button>
					<Button onClick={() => navigate("/")}>Back to Home</Button>
				</div>
			</div>
		</div>
	);
}

export default NotFoundError;
