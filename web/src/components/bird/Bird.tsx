import { motion } from "motion/react"

export const Bird = () => {
    return (
        <motion.div drag
                    whileDrag={{ scale: 1.25, cursor: "grabbing" }}
                    className="cursor-grab w-17.5 h-17.5 bg-[url(assets/bird.png)] bg-no-repeat bg-cover pixelated">
            {/*<img className="cursor-grab w-17.5 pixelated" src={bird} alt="Bird :D"></img>*/}
        </motion.div>
    );
};