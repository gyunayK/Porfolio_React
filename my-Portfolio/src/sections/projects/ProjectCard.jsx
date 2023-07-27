import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function ProjectCard({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  projectIMG,
}) {
  return (
    <div className="max-w-sm bg-white  xs:mx-4 md:mx-0 items-center justify-center  py-10 rounded-md border-2 border-transparent hover:border-[#850fbb]">
      <div className="flex flex-col space-y-5 text-center px-5 relative">
        <div className="absolute right-5 -top-6">
          <a href={githubLink}>
            <FaGithub className=" text-3xl cursor-pointer" />
          </a>
        </div>
        <div
          className=" w-full h-[200px] bg-no-repeat bg-contain "
          style={{ backgroundImage: `url('${projectIMG}')` }}
        ></div>
        <div>
          <h2 className="text-lg font-bold mb-1">{title}</h2>
          <p className="">{description}</p>
        </div>
        <div className="pt-4">
          <h2 className="font-bold mb-1">Tech Stack</h2>
          <p>{techStack}</p>
        </div>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#a111e4] py-3 text-white font-Tektur text-xs tracking-widest border-2 border-transparent hover:bg-transparent hover:text-black hover:border-black"
        >
          SEE LIVE
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  projectIMG: PropTypes.string.isRequired,
};

export default ProjectCard;
