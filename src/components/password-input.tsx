import { forwardRef, type InputHTMLAttributes, useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PasswordInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ className, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false);
		return (
			<div className="relative rounded-md">
				<input
					type={showPassword ? "text" : "password"}
					className={cn(
						"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					ref={ref}
					{...props}
				/>
				<Button
					type="button"
					size="icon"
					variant="ghost"
					className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground"
					onClick={() => setShowPassword((prev) => !prev)}
				>
					{showPassword ? (
						<EyeOpenIcon width={18} />
					) : (
						<EyeClosedIcon width={18} />
					)}
				</Button>
			</div>
		);
	},
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
