import type { ComponentProps } from "react";
import { cn } from "@/styles/utils";
import { motion } from "motion/react";

export type HelloWorldProps = {
	//
} & Omit<ComponentProps<typeof motion.div>, "children">;

export function HelloWorld({ className, ...props }: HelloWorldProps) {
	return (
		<motion.div
			className={cn("", className)}
			initial={{
				scale: 0,
				opacity: 0,
			}}
			animate={{
				scale: 1,
				opacity: 1,
			}}
			{...props}
		>
			Hello, World!
		</motion.div>
	);
}
