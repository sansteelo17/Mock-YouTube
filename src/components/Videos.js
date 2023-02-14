import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      flexDirection={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((video, videoId) => (
        <Box key={videoId}>
          {video.id.videoId ? (
            <VideoCard video={video} />
          ) : (
            <ChannelCard channel={video} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
