import { motion } from "motion/react"

export const Bird = () => {
    return (
        <motion.div
            animate={{ rotate: 720 }}
            transition={{ ease: "easeInOut", duration: 1 }}>
            <motion.div
                animate={{ scale: 1.25 }}
                transition={{ ease: "easeOut", duration: 0.5, repeat: 1, repeatType: "reverse" }}>
                <motion.div
                    drag
                    whileDrag={{ scale: 1.25, cursor: "grabbing" }}>
                    <div className="cursor-grab w-20 h-20 bg-[url(assets/bird.png)] bg-no-repeat bg-cover pixelated"></div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};