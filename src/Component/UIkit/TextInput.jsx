import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
  return (
    <TextField
      fullWidth={props.fullWidth} //画面横幅  boorean
      label={props.label} //入力内容
      margin="dense"
      multiline={props.multiline} //複数行の入力するか  boorean
      required={props.required} // 必須入力項目か　boorean
      rows={props.rows} //行数　multilineがtrueの時 number
      value={props.value} //受け取るusestate
      type={props.type} //入力タイプ "text   email   password number
      onChange={props.onChange} //関数　useCallback
    />
  );
};
export default TextInput;
