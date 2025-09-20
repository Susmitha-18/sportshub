import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function FitnessTest() {
  const videoRef = useRef(null); // video preview
  const mediaRecorderRef = useRef(null); // for recording
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [stream, setStream] = useState(null);

  // Start camera
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      alert("Camera permission denied or not available.");
      console.error(err);
    }
  };

  // Start recording
  const startRecording = () => {
    if (!stream) {
      alert("Start the camera first!");
      return;
    }
    setRecording(true);
    const mediaRecorder = new MediaRecorder(stream);
    let chunks = [];

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      setRecordedVideo(url);
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  // Handle file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedVideo(url);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">💪 Fitness Test</h2>
      <Row>
        <Col md={6}>
          <Card className="p-3 mb-4">
            <h5>Camera Preview</h5>
            <video ref={videoRef} autoPlay playsInline muted className="w-100 mb-3" style={{ borderRadius: "10px" }} />
            <div className="d-flex gap-2">
              <Button variant="success" onClick={startCamera}>Start Camera</Button>
              {!recording ? (
                <Button variant="primary" onClick={startRecording}>Start Recording</Button>
              ) : (
                <Button variant="danger" onClick={stopRecording}>Stop Recording</Button>
              )}
            </div>
            {recordedVideo && (
              <>
                <h6 className="mt-3">Recorded Video</h6>
                <video src={recordedVideo} controls className="w-100" style={{ borderRadius: "10px" }} />
              </>
            )}
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 mb-4">
            <h5>Upload Video</h5>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select a video file</Form.Label>
              <Form.Control type="file" accept="video/*" onChange={handleUpload} />
            </Form.Group>
            {uploadedVideo && (
              <>
                <h6>Uploaded Video Preview</h6>
                <video src={uploadedVideo} controls className="w-100" style={{ borderRadius: "10px" }} />
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FitnessTest;
