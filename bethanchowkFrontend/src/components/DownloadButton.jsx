import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";

const DownloadButton = () => {
  const handleDownload = () => {
    const filePath = "/survey_data.docx";

    saveAs(filePath, "survey_file.docx");
  };

  return (
    <button onClick={handleDownload}>
      <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
    </button>
  );
};

export default DownloadButton;
