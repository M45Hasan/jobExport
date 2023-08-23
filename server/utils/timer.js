function calculateTimeDifference(targetDateStr, currentTimestamp) {
 
    const targetDate = new Date(targetDateStr);
    const currentTime = new Date(currentTimestamp);
  
    const seconds = Math.floor(timeDifferenceMillis / 1000) % 60;
    const minutes = Math.floor(timeDifferenceMillis / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifferenceMillis / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24));

    const timeDifferenceMillis = targetDate - currentTime;
  
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
//   const targetDateString = target;
//   const currentTimestamp = Date.now();
  
//   const timeDifference = calculateTimeDifference(target, currentTimestamp);
  
  module.exports= {calculateTimeDifference}
  