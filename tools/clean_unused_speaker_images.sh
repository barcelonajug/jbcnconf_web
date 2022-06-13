#!/bin/bash

set -euo pipefail

readonly YEAR=${1:-"2022"}
readonly STAGING_AREA="_staging"
readonly SPEAKER_IMAGES=($(jq -r '.items[].image' "$YEAR/_data/speakers.json"))

stage_valid_images() {
  mkdir -p "$STAGING_AREA"
  echo "Published speakers: ${#SPEAKER_IMAGES[@]}"
  for f in "${SPEAKER_IMAGES[@]}"; do
    mv "$YEAR/$f" "$STAGING_AREA" || true
  done
}

clear_stage_area() {
  rm -rf "$STAGING_AREA"
}

clean_images() {
  local speaker_images_path="$YEAR/assets/img/speakers"
  # Use array bc du response does not comply with expansion spaces ¯\_(ツ)_/¯
  local images_found=($(du --inodes -s "$speaker_images_path"))
  echo "Deleting images: $((${images_found[0]} - 1))"
  rm -f $speaker_images_path/*.*
  mv $STAGING_AREA/*.* "$YEAR/assets/img/speakers/"
}

main() {
  stage_valid_images
  clean_images
  clear_stage_area
}

main
