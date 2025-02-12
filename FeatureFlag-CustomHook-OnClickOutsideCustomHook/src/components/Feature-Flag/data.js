const dummyAPIResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenrator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
    else reject("Some error occurred, Please try again!");
  });
}

export default featureFlagsDataServiceCall;
