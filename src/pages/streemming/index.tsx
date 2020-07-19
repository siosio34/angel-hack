import React from "react";

import "./meeting.css";
import AgoraVideoCall from "components/AgoraVideoCall";
import { useParams } from "react-router-dom";

const Streeming: React.FC = () => {
  const { id } = useParams();
  console.log("id", id);
  const videoProfile = "480p_4";
  const channel = id;
  const transcode = "interop";
  const attendeeMode = "video";
  const baseMode = "avc";
  const appId = "d7b7c42ecd9b41d196a26f77d2b12e10";

  const uid = undefined;

  return (
    <div className="wrapper meeting" style={{ width: "100%", height: 500 }}>
      <div className="ag-header">
        <div className="ag-header-msg">
          Room:&nbsp;<span id="room-name">{channel}</span>
        </div>
      </div>
      <div className="ag-main">
        <div className="ag-container" style={{ height: 400 }}>
          <AgoraVideoCall
            videoProfile={videoProfile}
            channel={channel}
            transcode={transcode}
            attendeeMode={attendeeMode}
            baseMode={baseMode}
            appId={appId}
            uid={uid}
          />
        </div>
      </div>
    </div>
  );
};

export default Streeming;
