import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { SelectSingleImageUpload } from '../../constant';
import Breadcrumb from '../common/breadcrumb';
import Files from 'react-files'

const UploadImage = () => {
  const [files, setFiles] = useState([]);

  function deleteFile(e) {
    setFiles([]);
    return files
    
  }
  const onFilesChange = (files) => {
    setFiles(files)
  }
  const onFilesError = (error, file) => {
    setFiles(file)
  }

  return (
    <Fragment>
      <Breadcrumb parent="Advance" title="Breadcrumb" />
      <Container fluid={true}>
        <Row>
                     <Col sm="12">
                         <Card>
                             <CardHeader>
                                 <h5>{SelectSingleImageUpload}</h5>
                             </CardHeader>
                             <CardBody className="fileUploader">
                                 <Files
                                    className='files-dropzone fileContainer'
                                    onChange={onFilesChange}
                                    onError={onFilesError}
                                    accepts={['image/*']}
                                    multiple={false}
                                    maxFileSize={10000000}
                                    minFileSize={0}
                                    clickable
                                >
                                    {
                                        files.length > 0
                                            ? <div className='files-gallery'>
                                                {files.map((file,index) =>
                                                    <img className='files-gallery-item' alt="img" src={file.preview.url} key={index} />
                                                )}
                                            </div>

                                            : <div className="d-flex justify-content-center">
                                                <button className="chooseFileButton me-2">Upload Image</button>
                                              </div>
                                    }
                                </Files>
                                {files.length > 0 ? 
                                  <div className="d-flex justify-content-center">
                                  <button className="btn btn-primary mt-2" type="button" onClick={() => deleteFile(files)}>
                                                      delete
                                                    </button></div>:''}
                                
                            </CardBody>
                        </Card>
                    </Col>
        </Row>
      </Container>
    </Fragment>
    
  );
};

export default UploadImage;