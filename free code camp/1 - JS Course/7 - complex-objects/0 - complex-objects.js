/*
 *Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
 */

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
      artist: "Tiesto",
      title: "Jackie Chan",
      release_year: 2016,
      formats: ["CD","Digital"],
      playInFestivals: true
  }
];


console.log("Artista 1: "+myMusic[0].artist);
console.log("Artista 2: "+myMusic[1].artist);