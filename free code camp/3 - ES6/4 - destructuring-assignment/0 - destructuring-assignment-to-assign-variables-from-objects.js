const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

const tempOfTomorrow = (avgTemperatures) => {
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
};

console.log(tempOfTomorrow(AVG_TEMPERATURES)); // should be 79

/****************************************************************************************************************************************/

const GOLY = {
  life: "365,000",
  shield: 16,
  speed: 15,
  lasers: 15
};

const DAMAGE_PER_LSR ={
  lf3: 150,
  lf4: 200,
  unstable: 185,
  prometheus: 205
};

const LIFE_OF_GOLY = (goly) => {
  const { life: life } = goly;
  return life;
};

const DMG_GOLY_FULL_LASERS= (goly,dmg,typeOfLaser) =>{
  const {lasers: totLasers} = goly;
  if(typeOfLaser === "lf3"){
    const {lf3 : totDMGWithLF3} = dmg;
    return totDMGWithLF3 * totLasers;
  }else if(typeOfLaser === "lf4"){
    const {lf4 : totDMGWithLF4} = dmg;
    return totDMGWithLF4 * totLasers;
  }else if(typeOfLaser === "unstable"){
    const {unstable : totDMGWithUnstable} = dmg;
    return totDMGWithUnstable * totLasers;
  }else if(typeOfLaser === "prometheus"){
    const {prometheus : totDMGWithPrometheus} = dmg;
    return totDMGWithPrometheus * totLasers;
  }
};


console.log("The life of a goly is: " + LIFE_OF_GOLY(GOLY));

console.log("Una goly con full lf3 pega de: "+DMG_GOLY_FULL_LASERS(GOLY,DAMAGE_PER_LSR,"lf3"));
console.log("Una goly con full lf4 pega de: "+DMG_GOLY_FULL_LASERS(GOLY,DAMAGE_PER_LSR,"lf4"));
console.log("Una goly con full inestables pega de: "+DMG_GOLY_FULL_LASERS(GOLY,DAMAGE_PER_LSR,"unstable"));
console.log("Una goly con full prometheus pega de: "+DMG_GOLY_FULL_LASERS(GOLY,DAMAGE_PER_LSR,"prometheus"));