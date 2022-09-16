INITIAL_SLEEP=${1:-0}

sleep $INITIAL_SLEEP

IMAGES=("arnie" "boning" "banana" "dancing" "hot-guys" "prince")
IMAGE_HEIGHTS=(590 710 420 720 750 540)
IMAGE_WIDTHS=(900 700 800 580 550 700)

for run in {1..3}; do
  for i in ${!IMAGES[@]}; do
    eog --new-instance /home/ceodude/Downloads/${IMAGES[$i]}.gif &
    xdotool search --sync --all --pid $! --name ${IMAGES[$i]}.gif windowsize ${IMAGE_WIDTHS[$i]} ${IMAGE_HEIGHTS[$i]} windowmove $((RANDOM % 1920)) $((RANDOM % 1080)) &
  done
done
