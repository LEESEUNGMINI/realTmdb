import React from "react";
import Layout from "../conponents/Layout";
import { Button, TextField } from "@mui/material";
import { VisuallyHiddenInput } from "@chakra-ui/react";
import { DiApple } from "react-icons/di";
export default function Mui() {
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <Button variant="text">zz</Button>
          <Button variant="contained" color="warning">
            zz
          </Button>
          <Button variant="outlined">zz</Button>
          <Button variant="outlined" startIcon={<DiApple />}>
            애플이다
          </Button>
          <TextField id="outlined-basic" label="이름" variant="outlined" />
          <TextField id="outlined-basic" label="이메일" variant="outlined" />
        </div>
      </div>
    </Layout>
  );
}
