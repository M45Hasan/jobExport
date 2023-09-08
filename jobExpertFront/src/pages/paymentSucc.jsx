import { useParams } from "react-router-dom";
import logo from "../assets/brandLogo/logo.png";
import appstore from "../assets/brandLogo/appstore (1).png";
import googlestore from "../assets/brandLogo/appstore (2).png";
import { useNavigate } from "react-router-dom";

const PaymentSucc = () => {
    const { tran_id } = useParams();
    const myExam = new URLSearchParams(window.location.search).get("myExam");
    const navigate = useNavigate()
    //split("/")[1]
    const currentPath = window.location.pathname.split("/")[1];
    const newPath = `${currentPath}/premiumZone`;

    return (
        <>
            <h1 className="text-xl md:text-2xl text-center mt-10 mb-10 font-semibold">Payment success Id: {tran_id}</h1>
            <h1 className="text-xl md:text-2xl text-center mt-10 mb-10 font-semibold">Package Id: {myExam}</h1>
            <div className="w-[100px] absolute right-[45%]">

                <div onClick={() => navigate("/jobexpart/premiumZone")} className="text-sm md:text-2xl text-[#blue] cursor-pointer  mt-10 mb-10  font-semibold " >
                    Back
                </div>

            </div>
            <section>
                <img src={logo} alt="" className="mx-auto mt-16" />
                <h1 className="text-xl md:text-2xl text-center mt-10 mb-10 font-semibold">
                    ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 mb-16">
                    <img src={appstore} alt="" className="w-40" />
                    <img src={googlestore} alt="" className="w-40" />
                </div>
            </section>
        </>
    );
};

export default PaymentSucc;
