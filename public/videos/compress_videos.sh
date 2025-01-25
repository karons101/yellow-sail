#!/bin/bash

# Directory containing videos
VIDEO_DIR="."

# Loop through all video files in the directory
for video in "$VIDEO_DIR"/*.mp4; do
    # Get the base name of the video file (without extension)
    base_name=$(basename "$video" .mp4)
    # Compress the video and save it as a new file
    ffmpeg -i "$video" -vcodec libx264 -crf 23 "${base_name}-compressed.mp4"
done
