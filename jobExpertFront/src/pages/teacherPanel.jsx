import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ExamDropdown from "../components/ExamDropdown/ExamDropdown";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TeacherPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [todayExam, setTodTayExam] = React.useState("");

  async function reciveDataFromChild(data) {
    setTodTayExam(data);
  }

  const [freeChecked, setFreeChecked] = React.useState(true);
  const [premiumChecked, setPremiumChecked] = React.useState(false);

  const handleFreeChange = () => {
    setFreeChecked(true);
    setPremiumChecked(false);
  };

  const handlePremiumChange = () => {
    setFreeChecked(false);
    setPremiumChecked(true);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Create Package" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <div className="max-w-4xl flex flex-col w-full gap-y-4">
            <TextField
              marginTop="10px"
              label="Package Titel"
              name="packageName"
              fullWidth
            />
            <TextField
              label="Package Discription "
              name="packageDetail"
              fullWidth
            />
            <div className="flex gap-x-5">
              <ExamDropdown
                titel={"Exam Category"}
                dataFromeChild={reciveDataFromChild}
              />

              <TextField name="examSubCategory" label="Exam SubCategory " />
              <FormControlLabel
                control={
                  <Checkbox checked={freeChecked} onChange={handleFreeChange} />
                }
                label="Free"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={premiumChecked}
                    onChange={handlePremiumChange}
                  />
                }
                label="Premium"
              />
            </div>

            <TextField name="examDate" label="Exam Date" fullWidth />
            <TextField name="examTime" label="Exam Time" fullWidth />
            <TextField name="Exam Title" label="Exam Title" fullWidth />
            <TextField name="examDuration" label="Exam Duration" fullWidth />
            <TextField name="examInfo" label="Exam Info" fullWidth />
            <TextField name="examMark" label="Exam Mark" fullWidth />
          </div>
        </Box>
        <div className="mt-5">
          <Button
            sx={{
              display: "block",
              textAlign: "center",

              margin: "0 auto",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
