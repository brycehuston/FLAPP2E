import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_1, source_code_2 }) => {
  return (
    <motion.div variants={fadeIn("up", "spring",
    index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full"      
      >
        <div className="relative w-full">

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div              
              onClick={() => window.open
              (source_code_2, "_blank")}
              className="black-gradient w-10 h-10
              rounded-full flex justify-center 
              items-center cursor-pointer"
            >
              <img 
                src={link}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>                  
            
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const walletAddress = "0x1e047ACD0708aB789D8329773eAd8B6603c30318";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
      .then(() => {
        alert("Address copied to clipboard!"); // You can replace this with a more sophisticated notification
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  };
  return (
    <> 
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Overview
        </p>
        <h2 className={styles.sectionHeadText}>
          Tokenomics.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mb-16"
          
          >
            Dive into the world of FLAP, where gaming transcends into a realm of innovation and 
            community. FLAP is more than just a play-to-earn game; it's a journey into a universe 
            where each player's skill and dedication are the keys to success.
          </motion.p>          
      </div>      

           {/* New Section */}
           <div className="w-full">
           <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            FLAP CONTRACT ADDRESS:
          </p>
          <div className="flex items-center gap-2">
          <h2 
        style={{ fontSize: '25px' }} // Inline style for font size
        className={styles.sectionHeadText}
      >
        {walletAddress}
      </h2>
            <img 
              src={link} // Replace with your copy icon's path
              alt="Copy"
              className="cursor-pointer"
              onClick={copyToClipboard}
              style={{ width: '24px', height: '24px' }} // Adjust size here
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "token");