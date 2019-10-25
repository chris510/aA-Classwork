// window.selectLocation = selectLocation
const selectLocation = (city, jobs) => {
  return {
    type: "SWITCH_LOCATION",
    city,
    jobs,
  }
}

export default selectLocation;