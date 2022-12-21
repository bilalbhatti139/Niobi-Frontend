import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Uploader = (props) => {
  const { actionState, upload, setUpload, name, setFieldValue, description, isReset } = props;

  const [files, setFiles] = useState([]);
  const [fileLargeError, setFileLargeError] = useState(false);

  useEffect(() => {
    if (upload && upload.preview) {
      setFiles([upload]);
    } else {
      if (actionState && upload) {
        setFiles([{ name: upload, path: upload, preview: upload }]);
      } else setFiles([]);
    }
  }, [actionState, upload]);

  const { isDragActive, open, getRootProps, getInputProps } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.svg', '.pdf'] },
    minSize: 0,
    maxSize: 1024 * 1024,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles) {
        setFiles(rejectedFiles);
      }
      setFileLargeError(
        rejectedFiles &&
          rejectedFiles[0] &&
          rejectedFiles[0].errors &&
          rejectedFiles[0].errors[0].code
      );

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
      if (setUpload)
        setUpload(acceptedFiles && acceptedFiles.length > 0 ? acceptedFiles[0] : props.icon);
      if (setFieldValue) {
        setFieldValue(name, acceptedFiles[0]);
      }
    }
  });

  // console.log("thumb image =>",thumbs)


  const thumbs = files.map((file, index) => (
    <div className="flex-col items-center w-full" key={'image-preview-cont' + index}>
      <img className="w-fit h-1/2 pr-2" src={file.preview} alt="..." />
      <span className="font-sm">{file.name ? file.name.split('/').pop() : ''}</span>
    </div>
  ));

  return (
    <div className="flex justify-center items-center w-full">
      <label
        htmlFor="dropzone-file"
        className={`flex flex-col justify-center items-center w-full rounded-lg border-2 border-gray-300 border-dashed cursor-pointer`}>
        <div
          {...getRootProps({ className: 'dropzone-upload-wrapper ' })}
          className={`flex flex-col justify-center items-center py-6`}>
          <input {...getInputProps()} />
          <div className="mb-2 text-sm text-gray-500" onClick={open}>
            {!isDragActive && thumbs.length === 0 && (
              <div className="flex overflow-hidden justify-center align-center">
                <p className="p-2">{description} </p>
              </div>
            )}
            {thumbs.length > 0 ? (
              <div className="w-full h-full">{thumbs}</div>
            ) : (
              <>
                <span className="font-semibold text-lg text-[#DB398E]">Upload a file</span>
                <span className="font-medium text-lg ml-1 ">or drag and drop</span>
                <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
              </>
            )}
            {!isReset && fileLargeError && (
              <div className="text-[#ff4d4d] font-bold text-sm ml-4">
                {fileLargeError === 'file-too-large'
                  ? 'Image is too large'
                  : fileLargeError === 'file-invalid-type'
                  ? 'Invalid file type. Only jpg, jpeg and png files are allowed'
                  : 'File not Uploaded'}
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};
export default Uploader;
