import { motion } from "framer-motion";
import cdn from "../../../constants/cdn";

export default function ImageDisplay({ post }) {
	return (
		<motion.img
			key={post?.id}
			src={cdn + "posts/" + post?.image}
			alt={`Post ${post?.id}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.075 }}
			className='absolute w-full top-0 -z-10 left-0 h-full object-cover'
		/>
	);
}  