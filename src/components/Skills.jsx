import { skillArr, skillArr2 } from "@/utils/skills";
import { CardSkill } from "./CardSkill";
import { CardSkill2 } from "./CardSkill2";
export const Skills = () => {
  return (
    <div className="w-4/5 m-auto mt-10">
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
        <div className=" mt-[48px] ">
          <div className="flex justify-between items-center m-auto">
            {skillArr.map((e) => {
              return <CardSkill icon={e.icon} text={e.text} />;
            })}
          </div>
          <div className="flex justify-between items-center m-auto mt-14">
            {skillArr2.map((a) => {
              return <CardSkill2 icon={a.icon} text={a.text} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
