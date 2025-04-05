import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "gray",
  border: "1px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  textAlign: "center" as "center",
};

type Props = {
  header: { success: String; failure: String };
  output: { success: String; failure: String };
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  formStatus: number | undefined;
};

export default function BasicModal(props: Props) {
  const handleClose = () => props.onClose(false); // wrapper to bypass MUIU props type

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: "white" }}
        >
          <span>
            {props.formStatus === 200
              ? props.header.success
              : props.header.failure}
          </span>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "white" }}>
          {`${
            props.formStatus === 200
              ? props.output.success
              : props.output.failure
          }`}
        </Typography>
        <div className="flex">
          <button
            onClick={handleClose}
            className="text-white  text-[16px] border-black dark:border-white mt-5 p-[3px] w-2/3 rounded-xl border-2 active:scale-105 mx-auto "
          >
            OK
          </button>
        </div>
      </Box>
    </Modal>
  );
}
