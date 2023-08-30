import JobExpart from "../../components/JobExpart/JobExpart";
import PackageDropdown from "../../components/PackageDropdown/PackageDropdown";
import Slider from "../../components/Slider/Slider";

const Result = () => {
  return (
    <>
      <div className=" flex items-center mt-16">
        <PackageDropdown />
      </div>
      <div className="mt-16">
        <div className="border  bg-primary">
          <h1 className="text-xl font-semibold text-[#FFFFFF] py-3 text-center">
            বিসিএস প্রিলি২০২৩
          </h1>
        </div>
        <div className="mx-auto">
          <table className="table-auto mt-5 w-full text-center">
            <tbody>
              <tr>
                <td className="border px-4 py-2 ">বিষয়</td>
                <td className="border px-4 py-2 ">সঠিক উত্তর</td>
                <td className="border px-4 py-2 ">মোট নাম্বার</td>
                <td className="border px-4 py-2 ">কমেন্ট</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 ">বিসিএস প্রিলি-২০২৩</td>
                <td className="border px-4 py-2 ">৬০</td>
                <td className="border px-4 py-2 ">১০০</td>
                <td className="border px-4 py-2 ">Intermediate</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 ">৯ম-২০তম গ্রেড পরীক্ষা</td>
                <td className="border px-4 py-2 ">৫০</td>
                <td className="border px-4 py-2 ">৫০</td>
                <td className="border px-4 py-2 ">Best</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 ">ভর্তি পরীক্ষা</td>
                <td className="border px-4 py-2 ">২০</td>
                <td className="border px-4 py-2 ">২০</td>
                <td className="border px-4 py-2 ">Best</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* slider */}
      <div className="mt-16">
        <Slider />
      </div>

      {/* job expart */}
      <JobExpart />
    </>
  );
};

export default Result;
