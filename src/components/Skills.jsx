import { skillArr } from "@/utils/skills";
import { CardSkill } from "./CardSkill";

export const Skills = () => {
  return (
    <div className="w-4/5 m-auto mt-20">
      <div>
        <div className="flex items-center justify-center">
          <button className=" bg-stone-400 border rounded-lg p-[4px] ">
            Skills
          </button>
        </div>
        <div className="flex items-center justify-center mt-[16px]">
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-[48px]">
          <CardSkill {skillArr.map}/>
        </div>
      </div>
    </div>
  );
};
