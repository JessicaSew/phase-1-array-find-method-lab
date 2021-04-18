
function superbowlWin(record) 
{
  const recordResult = record.find( record => record.result === "W")
  if (typeof (recordResult) === "undefined") {
      return undefined
  }
  else {
    return recordResult.year   
  }

}
