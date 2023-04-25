import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKeditor = ({ data, onChange }) => {
  return (
    <div style={{ color: "black", paddingTop:'1rem' }}>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={onChange}
        // config={{ skin: "moono-dark" }}
      />
    </div>
  );
};

export default CKeditor;
