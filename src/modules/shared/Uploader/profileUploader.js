import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import {
    profileUploadImgResponse, profileUploadImgRequest, getProfileImgResponse
} from '../../../redux/reducers/ducks/ProfileDuck';
import coach_image from "../../public_profile/assets/coach-img.png"


const ProfileUploader = (props) => {

    // const {setImg} = props;

    const dispatch = useDispatch();
    const {
        profileUploadImg,
        getProfileUploadImg,
        usersResponse
    } = useSelector(({ profile, user }) => ({
        profileUploadImg: profile?.profileUploadImg,
        getProfileUploadImg: profile?.getProfileUploadImg,
        usersResponse: user?.usersResponse
    }));

    const { actionState, upload, setUpload, name, setFieldValue, description, isReset, setImg } = props;
    const [files, setFiles] = useState([]);
    const [fileLargeError, setFileLargeError] = useState(false);

    console.log("uploader file =>", files)




    useEffect(() => {
        if (upload && upload.preview) {
            setFiles([upload]);
        } else {
            if (actionState && upload) {
                setFiles([{ name: upload, path: upload, preview: upload }]);
            } else setFiles([]);
        }
    }, [actionState, upload]);




    const thumbs = files.map((file, index) => (
        <div className="flex-col items-center w-full" key={'image-preview-cont' + index}>
            <img className="w-[100px] h-[100px] pr-2 rounded-full" src={file.preview} alt="profile-photo" />
            {/* <span className="font-sm">{file.name ? file.name.split('/').pop() : ''}</span> */}
        </div>

    ));


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

            setImg(acceptedFiles[0])
            console.log("thumb img =>", acceptedFiles[0])

            if (setUpload)
                setUpload(acceptedFiles && acceptedFiles.length > 0 ? acceptedFiles[0] : props.icon);
            if (setFieldValue) {
                setFieldValue(name, acceptedFiles[0]);
            }

        }

    });


    // profile img uploader 
    useEffect(() => {
        if (files) {
            dispatch(profileUploadImgResponse({ response: files }));
        }
    }, [files]);


    console.log("select file =>", thumbs)


    // useEffect(() => {
    //     if (files) {
    //         dispatch(getProfileImgResponse({ response: files }));
    //     }
    // }, []);



    return (
        <>
            <div className='flex w-3/2 my-[20px]'>
                <div className=''>
                    <div>
                        <img className="w-[100px] h-[100px] rounded-full"  src={coach_image} />
                    </div>
                </div>
                <div className='block mt-2 ml-[15px]'>
                    <div className="flex">
                        <label
                            htmlFor="dropzone-file"
                            className={`flex flex-col rounded-lg border-2 border-gray-300 w-[200px] border-solid cursor-pointer`}>
                            <div
                                {...getRootProps({ className: 'dropzone-upload-wrapper ' })}
                                className={`flex flex-col items-center justify-center h-[50px] w-[200px]`}>
                                <input {...getInputProps()} />
                                <div className="mb-2 text-sm text-gray-500" onClick={open}>
                                    {!isDragActive && thumbs.length === 0 && (
                                        <div className="flex overflow-hidden justify-center align-center">
                                            <p className="p-2">{description} </p>
                                        </div>
                                    )}

                                    {/* <span className="font-semibold text-lg text-[#DB398E]" onClick={() => getProfileImage(thumbs)}>Upload a file</span> */}
                                    <button className='font-semibold text-lg text-[#DB398E]'>
                                        <div className="flex items-center py-2 px-2 text-gray-600">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                                            </svg>
                                            <span className="font-medium  text-lg">Upload Photo</span>
                                        </div>
                                    </button>


                                    {/* <span className="font-medium text-lg ml-1 ">or drag and drop</span>
                                <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p> */}


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

                    <div className="font-medium text-lg text-[#DB398E] w-2/3 mt-3 w-[200px] text-center cursor-pointer">
                        Remove Photo
                    </div>
                </div>

            </div>

        </>

    );
};
export default ProfileUploader;
