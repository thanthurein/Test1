const checkResult = function (score) {
    return score / 3  ;
   };
   const finalResult = function (mgmgScores, aungaungScores) {
   const mgmgTotalScores = checkResult(mgmgScores);
   const aungaungTotalScores = checkResult(aungaungScores);
   const AeverageScore = `Mg Mg of scores ${mgmgTotalScores} marks and Aung Aung of scores ${aungaungTotalScores} marks`;
    return AeverageScore;
   };
   console.log(finalResult([50 + 20 + 10] , [10 + 30 + 50]));
   