import type { ComponentProps } from "react";
import { cn } from "@/styles/utils";

export type QuizProps = {
	//
} & Omit<ComponentProps<"div">, "children">;

/**
 * TODO
 */
export function Quiz({ className, ...props }: QuizProps) {
	return (
		<div className={cn("", className)} {...props}>
			{/* TODO */}
		</div>
	);
}
