import { Button } from "@mui/material";
import React, { useState } from "react";

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [datas, setDatas] = useState({
    subject: "",
    text: "",
    titel: "",
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handelInput = (e) => {
    let { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      await axios.post("/jobExpert/api/v1/upload-pdf", { ...datas, formData });
      alert("File uploaded successfully.");
    } catch (error) {
      alert("Error uploading file.");
      console.error(error);
    }
  };
  //pdf end
  return (
    <>
      <div>
        <input type="text" name="subject" onChange={handelInput} />
        <input type="text" name="text" onChange={handelInput} />
        <input type="text" name="title" onChange={handelInput} />
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload PDF</button>
      </div>
    </>
  );
};

export default UploadPDF;
