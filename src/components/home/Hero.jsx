import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import AiIllustrator from "../../assets/ai-illustrator.jpeg";
import { memo, useCallback } from "react";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate("/resume"), []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold leading-tight">
          Find Jobs That Actually Match Your Skills 
        </h1>
        <p className="text-base text-[rgb(var(--color-muted))] leading-relaxed">
        Upload your resume and instantly see remote jobs that match your skills. No manual searching, no guessing.
        </p>
        <Button onClick={handleClick} children="Start Matching" />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full mx-auto"
      >
        <img
          src={AiIllustrator}
          alt="Ai reveiwing resume with magnifying glass"
          className="w-full h-full  object-contains rounded-full"
        />
      </motion.div>
    </>
  );
};

export default memo(Hero);
