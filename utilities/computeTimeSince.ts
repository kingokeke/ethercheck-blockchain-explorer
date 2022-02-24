import TIME_CONSTANTS from "../enums/timeConstant.enum";

const computeTimeSince = (timestamp: number) => {
  const now = Date.now();
  const timeSince = now - timestamp;
  const seconds = Math.floor(timeSince / TIME_CONSTANTS.SECOND);
  const minutes = Math.floor(seconds / TIME_CONSTANTS.MINUTE);
  const hours = Math.floor(seconds / TIME_CONSTANTS.HOUR);
  const days = Math.floor(seconds / TIME_CONSTANTS.DAY);

  if (seconds === TIME_CONSTANTS.NOW) {
    return `just now`;
  }

  if (seconds === TIME_CONSTANTS.SECOND) {
    return `${seconds} sec ago`;
  }

  if (seconds < TIME_CONSTANTS.MINUTE) {
    return `${seconds} secs ago`;
  }

  if (seconds < TIME_CONSTANTS.HOUR) {
    return `${minutes} mins ago`;
  }

  if (seconds < TIME_CONSTANTS.DAY) {
    return `${hours} hours ago`;
  }

  if (seconds < TIME_CONSTANTS.WEEK) {
    return `${days} days ago`;
  }
};

export default computeTimeSince;