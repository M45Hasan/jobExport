import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Icon } from "@iconify/react";
import PackageUpdate from "./PackageUpdate";
import Routine from "./Routine";
import Result from "./Result";
import ExamUpdate from "./ExamUpdate";
import Favourite from "./Favourite";

const StudentTabs = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Tabs>
        {/* tab list */}
        <TabList>
          <Tab>
            <h3 className="flex justify-center items-center gap-2 py-2 px-7">
              {" "}
              <Icon icon="jam:refresh" width={20} />
              <span>প্যাকেজ আপডেট</span>
            </h3>
          </Tab>
          <Tab>
            <h3 className="flex justify-center items-center gap-2 py-2 px-7">
              {" "}
              <Icon icon="jam:refresh" width={20} />
              <span>আপডেট রুটিন</span>
            </h3>
          </Tab>
          <Tab>
            <h3 className="flex justify-center items-center gap-2 py-2 px-12">
              {" "}
              <Icon icon="jam:refresh" width={20} />
              <span>রেজাল্ট</span>
            </h3>
          </Tab>
          <Tab>
            <h3 className="flex justify-center items-center gap-2 py-2 px-7">
              {" "}
              <Icon icon="jam:refresh" width={20} />
              <span>পরীক্ষা আপডেট</span>
            </h3>
          </Tab>
          <Tab>
            <h3 className="flex justify-center items-center gap-2 py-2 px-11">
              {" "}
              <Icon icon="jam:refresh" width={20} />
              <span>ফেভারিট</span>
            </h3>
          </Tab>
        </TabList>

        {/* tab list items  */}

        {/* package update */}
        <TabPanel>
          <div>
            <PackageUpdate />
          </div>
        </TabPanel>

        {/* routine update */}
        <TabPanel>
          <Routine />
        </TabPanel>

        {/* Result update */}
        <TabPanel>
          <Result />
        </TabPanel>

        {/* exam update */}
        <TabPanel>
          <ExamUpdate />
        </TabPanel>

        {/* favourite  */}
        <TabPanel>
          <Favourite />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default StudentTabs;
