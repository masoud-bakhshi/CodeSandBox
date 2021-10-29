import React, { useContext, useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Paper,
  makeStyles,
  Button,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import { multiStepContext } from "../../projectcard/AddProject/StepContext";
import PostAddIcon from "@material-ui/icons/PostAdd";
// import { useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Controlled as CodeMirror } from "react-codemirror2";
import BasicTree from "./TreeBranch/FolderTree";
const codeExt = require("./codeExt");
// const manageAxio = require("../../utils/manageAxio");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");

const AddressUrl = process.env.REACT_APP_ADDRESS;
function Alert(props) {
  return <MuiAlert elevation={99999} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  ro: {
    // flexGrow: 1,
    justifyContent: "left",
    alignItems: "left",
    width: "100%",
  },
  butt: {
    margin: theme.spacing(1),
  },
  pap: {
    padding: theme.spacing(4),
    justifyContent: "left",
    alignItems: "left",

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
}));
const exampleCode = `
const devcodebase = () => {
  console.log("Remember me :)");
  history.push("http://devcodebase.ir");
};`;

const CodeEditor = (props) => {
  const classes = useStyles();
  // const { userInfo, setAuthData, setLoadingS } = useContext(multiStepContext);
  const [sOpen, setSOpen] = useState(false);
  // const location = useLocation();
  // let history = useHistory();
  const [payload, setPayload] = useState({
    projectname: "masoud",
    filename: "",
    code: exampleCode,
    description: "",
    // username: userInfo,
  });

  const onValueChange = (code) => {
    setPayload({ ...payload, code });
  };
  const onChangeFile = (event) => {
    setPayload({ ...payload, filename: event.target.value });
  };
  const onChangeProject = (event) => {
    setPayload({ ...payload, projectname: event.target.value });
  };
  const onChangeDescription = (event) => {
    setPayload({ ...payload, description: event.target.value });
  };
  //
  // const reMap = () => {
  //   history.push("/dashboard/showCode");
  // };
  // const handleIncludeCode = () => {
  //   try {
  //     manageAxio.handleIncludeCode(
  //       payload,
  //       setLoadingS,
  //       setAuthData,
  //       setPayload,
  //       userInfo,
  //       reMap
  //     );
  //   } catch (error) {}
  // };
  // const DeclineBut = () => {
  //   history.push("/dashboard/showCode");
  // };
  //****************************************************** */
  let fileReader;
  // let filename1
  const handleFileRead = (e) => {
    const content = fileReader.result;
    const filename1 = fileReader.name;
    // console.log(filename1);

    setPayload({ ...payload, code: content, filename: filename1 });
    // setPayload({ ...payload, filename: filename1 });
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    // console.log(file.name.split(".")[1]);
    // if (hasExt(file.name.split(".")[1]) )
    if (hasExt(file.name.split(".")[1])) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
      fileReader.name = file.name;
    }

    // console.log(fileReader.name);
    // console.log(fileReader.name);
  };

  const hasExt = function (value) {
    for (let index = 0; index < codeExt.wordExt.length; index++) {
      if (value !== null && value !== "" && value !== "undefined") {
        if (value == codeExt.wordExt[index]) {
          // console.log(codeExt.wordExt[index].toLowerCase());
          return true;
        }
      }
    }
    setSOpen(true);
    return false;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSOpen(false);
  };
  //********************************************************************* */
  return (
    <div
      style={{
        marginRight: "5px",
        marginLeft: "5px",
        justifyContent: "left",
      }}
      className={classes.ro}
    >
      <Snackbar open={sOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          متاسفانه فایل مورد نظر کد برنامه نویسی نمی باشد
        </Alert>
      </Snackbar>
      {/* <CssBaseline /> */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <div>
            <BasicTree />
          </div>
        </Grid>

        <Grid item zeroMinWidth xs={12} md={5}>
          <div className="container mx-auto p-4"></div>

          <Grid>
            <Grid container>
              <Typography variant="h6" gutterBottom>
                Create your own CodeBlocks
              </Typography>
            </Grid>

            <Grid container>
              <Typography variant="h7">Upload your code file</Typography>
            </Grid>

            <div
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                marginRight: "5px",
                marginLeft: "5px",
                textAlign: "left",
              }}
            >
              <input
                type="file"
                id="file"
                className="input-file"
                //  accept=".js , .dyalog,.apl"
                onChange={(e) => handleFileChosen(e.target.files[0])}
              />
            </div>

            <Grid container>
              <Typography variant="h7">Write your code</Typography>
            </Grid>

            <div
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                marginRight: "5px",
                marginLeft: "5px",
                textAlign: "left",
              }}
            >
              <CodeMirror
                options={{
                  mode: "javascript",
                  theme: "material",
                  // lineNumbers: true,
                }}
                value={payload.code}
                onBeforeChange={(editor, data, value) => {
                  //setValue(value);
                  setPayload({ ...payload, code: value });
                }}
              />
            </div>

            <div
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            ></div>
          </Grid>
        </Grid>
        <Grid item zeroMinWidth xs={12} md={5}>
          <iframe
            name="I1"
            id="if1"
            width="100%"
            height="100%"
            // style="visibility:visible"
            src="http://www.devcodebase.com"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};
export default CodeEditor;
