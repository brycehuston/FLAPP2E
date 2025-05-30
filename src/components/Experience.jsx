import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1a1a1a",
      color: "#fff",
      borderRadius: "20px",
      padding: "0px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #00cea8" }}
    date={experience.date}
    iconStyle={{
      background: "#1a1a1a",
      border: "2px solid #00cea8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    icon={
      <div className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-[#00cea8] via-[#bf61ff] to-[#1a1a1a] animate-pulse shadow-xl">
        <span className="text-white text-[20px] font-bold">{index + 1}</span>
      </div>
    }
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-shimmer green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-[#1a1a1a] rounded-[20px] py-5 px-6">
          <h3 className="text-[24px] font-extrabold text-white">
            {experience.title}
          </h3>
          <p className="text-gray-300 text-[16px] font-semibold mb-4">
            {experience.company_name}
          </p>

          <ul className="ml-5 space-y-2 list-disc text-[14px] text-gray-100">
            {experience.points.map((point, idx) => (
              <li key={`xp-${idx}`} className="tracking-wider">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Our plans so far</p>
      <h2 className={styles.sectionHeadText}>Road Map</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} index={i} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
