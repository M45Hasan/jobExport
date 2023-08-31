import axios from "../Axios/axios";
import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertToRaw } from "draft-js";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Question = ({ examSerials, NID }) => {
  let [info, setInfo] = useState({
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    rightAnsOne: "",
    rightAnsTwo: "",
    ansDetail: "",
    rightMark: "",
    wrongMark: "",
  });

  let [error, setError] = useState({
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    ansDetail: "",
    rightMark: "",
    wrongMark: "",
  });

  const handetype = (e) => {
    let { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    setError({ ...error, [name]: value ? "" : `${name} is required` });
    console.log(info);
  };

  const handelSubmit = async () => {
    setError({
      optionA: !info.optionA ? "Please Input optionA" : "",
      optionB: !info.optionB ? "Please Input optionB" : "",
      optionC: !info.optionC ? "Please Input optionC" : "",
      optionD: !info.optionD ? "Please Input optionD" : "",
      rightAnsOne: !info.rightAnsOne ? "Please Input rightAnsOne" : "",
      ansDetail: !info.ansDetail ? "Please Input ansDetail" : "",
      rightMark: !info.rightMark ? "Please Input rightMark" : "",
      wrongMark: !info.wrongMark ? "Please Input wrongMark" : "",
    });
    if (
      !info.optionA ||
      !info.optionB ||
      !info.optionC ||
      !info.optionD ||
      !info.rightAnsOne ||
      !info.ansDetail ||
      !info.rightMark ||
      !info.wrongMark
    ) {
      return;
    }

    try {
      const res = await axios.post("/jobExpert/api/v1/questioncreate", {
        ...info,
        examSerial: examSerials,
        nid: NID,
        whatIsTheQuestion: JSON.stringify(editorContent), // Convert to JSON string
        // other data you want to send
      });
      console.log(res);
      toast.success("Successfully Package Create", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorContent, setEditorContent] = useState(null);

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);

    const contentState = newEditorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    setEditorContent(contentRaw);
  };

  return (
    <>
      <div className="flex">
        <div className="w-[60%]">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="max-w-4xl flex flex-col w-full gap-y-4 mt-10">
              {error.whatIsTheQuestion && (
                <p className="text-[red] text-lg">{error.whatIsTheQuestion}</p>
              )}
              {/* <TextField
                marginTop="10px"
                label="what Is The Question"
                name="whatIsTheQuestion"
                fullWidth
                onChange={handetype}
              /> */}
              <div>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                />
              </div>

              {error.optionA && (
                <p className="text-[red] text-lg">{error.optionA}</p>
              )}
              <TextField
                label="optionA "
                name="optionA"
                fullWidth
                onChange={handetype}
              />

              {error.optionB && (
                <p className="text-[red] text-lg">{error.optionB}</p>
              )}

              <TextField
                onChange={handetype}
                name="optionB"
                label="option B"
                fullWidth
              />
              {error.optionC && (
                <p className="text-[red] text-lg">{error.optionC}</p>
              )}
              <TextField
                onChange={handetype}
                name="optionC"
                label="option C"
                fullWidth
              />
              {error.optionD && (
                <p className="text-[red] text-lg">{error.optionD}</p>
              )}
              <TextField
                onChange={handetype}
                name="optionD"
                label="option D"
                fullWidth
              />
              {error.rightAnsOne && (
                <p className="text-[red] text-lg">{error.rightAnsOne}</p>
              )}
              <div>
                <p>Select Correct ANS</p>
                <input
                  type="radio"
                  id="html"
                  name="rightAnsOne"
                  value="optionA"
                  onChange={handetype}
                ></input>
                  <label for="html">option A</label> {" "}
                <input
                  type="radio"
                  id="css"
                  name="rightAnsOne"
                  value="optionB"
                  onChange={handetype}
                ></input>
                  <label for="css">option B</label> {" "}
                <input
                  type="radio"
                  id="javascript"
                  name="rightAnsOne"
                  value="optionC"
                  onChange={handetype}
                ></input>
                <label for="css">option C</label>{" "}
                <input
                  type="radio"
                  id="javascript"
                  name="rightAnsOne"
                  value="optionD"
                  onChange={handetype}
                ></input>
                  <label for="javascript">Option D</label>{" "}
              </div>

              {error.ansDetail && (
                <p className="text-[red] text-lg">{error.ansDetail}</p>
              )}
              <TextField
                onChange={handetype}
                name="ansDetail"
                label="ans Detail"
                fullWidth
              />
              {error.rightMark && (
                <p className="text-[red] text-lg">{error.rightMark}</p>
              )}
              <TextField
                onChange={handetype}
                name="rightMark"
                label="right Mark"
                type="number"
                fullWidth
              />
              {error.wrongMark && (
                <p className="text-[red] text-lg">{error.wrongMark}</p>
              )}
              <TextField
                onChange={handetype}
                name="wrongMark"
                label="wrong Mark"
                type="number"
                fullWidth
              />
            </div>
          </Box>
          <div className="mt-5">
            <Button
              onClick={handelSubmit}
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
        </div>
        <TableContainer sx={{ width: "30%" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Question;
