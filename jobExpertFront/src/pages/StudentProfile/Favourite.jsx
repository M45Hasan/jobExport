import JobExpart from "../../components/JobExpart/JobExpart";
import PackageDropdown from "../../components/PackageDropdown/PackageDropdown";

const Favourite = () => {
  return (
    <>
      <div className=" flex items-center mt-16">
        <PackageDropdown />
      </div>
      <div className="mx-auto mt-5">
        <table className="table-auto w-full text-center">
          <tbody>
            <tr>
              <td className="border px-4 py-2">পরীক্ষার আইডি</td>
              <td className="border px-4 py-2">৩৫২৫৬৩</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">পরীক্ষার নাম </td>
              <td className="border px-4 py-2">বিসিএস প্রিলিনিয়াম-২০২৩</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">পরীক্ষার সিলেবাস </td>
              <td className="border px-4 py-2">পিডিএফ ডাউনলোড করুন</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">পরীক্ষার শুরু </td>
              <td className="border px-4 py-2">
                শনিবার-২৫-০৯-২০২৩, সকাল-১০:০০ মিনিট
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">পরীক্ষার পরবর্তী তারিখ </td>
              <td className="border px-4 py-2">
                শনিবার-২০-১১-২০২৩, সকাল-১০:০০ মিনিট
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* job expart */}
      <JobExpart />
    </>
  );
};

export default Favourite;
