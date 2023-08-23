import { Icon } from "@iconify/react";
import { ChangeEvent, useState } from "react";

const ExamDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className=" flex items-center mt-16">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 border-2 border-primary py-2.5 px-3 mt-2"
        htmlFor="options"
      >
        পরিক্ষাঃ
      </label>
      <div className="w-52 relative ml-2">
        <select
          id="options"
          value={selectedOption}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-900 py-3 px-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline bg-primary text-[#FFFFFF] cursor-pointer"
        >
          <option value="option1">৬ মাস বিসিএস প্রিলি</option>
          <option value="option2">বিসিএস প্রিলি ২০২৩</option>
          <option value="option3">বিসিএস প্রিলি ২০২৩</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width={25}
            className="text-[#FFFFFF]"
          />
        </div>
      </div>
    </div>
  );
};

export default ExamDropdown;
