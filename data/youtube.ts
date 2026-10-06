export type CarVideo = { videoId: string; title: string; channel: string };

/**
 * One YouTube video per car, shown under the car photo.
 * Every videoId was checked against YouTube oEmbed (HTTP 200, title names the car);
 * title and channel are the oEmbed title and author_name.
 * A car missing here falls back to a YouTube search link for "<nameEn> review"
 * (ligier-js5: no video whose title names the JS5 itself was found).
 */
export const carVideos: Record<string, CarVideo> = {
  "mclaren-m23": { videoId: "vTJzMLEOQ6U", title: "Emerson Fittipaldi drives flat out in the McLaren Senna and M23 F1™ car", channel: "McLaren Automotive" },
  "ferrari-312t2": { videoId: "ZW0K2vp1yQ4", title: "Lauda's 1976 Monaco-winning Ferrari 312T2 returns 50 years on", channel: "Goodwood Road & Racing" },
  "ferrari-312t": { videoId: "zsjzJ1JJqSs", title: "Driving Niki Lauda's 1975 Ferrari 312T Formula 1 car", channel: "Griot's Garage" },
  "hesketh-308": { videoId: "SlJxFOm45kE", title: "ex-James Hunt Hesketh 308/1 F1 car Phillip Island Classic 2023 Formula 1 Cosworth DFV", channel: "callanrs2000" },
  "brm-p160": { videoId: "DLqYzqQj3Nw", title: "BRM V16 & P160 Awesome Sound | Prescott Historique Hillclimb 2024", channel: "RACER Video" },
  "lotus-77": { videoId: "loAHo_QqZ7A", title: "Lotus 77 ex-Mario Andretti loud Cosworth DFV 2018 Monterey Reunion FIA Masters Formula 1", channel: "callanrs2000" },
  "tyrrell-p34": { videoId: "nLkRKJgaEeI", title: "When 6 wheels shocked F1 | The story of the Tyrrell P34", channel: "Goodwood Road & Racing" },
  "brabham-bt45": { videoId: "e_c9WmqqLtk", title: "『Brabham ALFA ROMEO BT45』ブラバムBT45　グッドウッド　Goodwood", channel: "HISTORIC RACINGCARS CHANNEL" },
  "march-761": { videoId: "9x0g65QJ3RA", title: "Formula 1: 1976 March 761 at Laguna Seca", channel: "Marshall Pruett" },
  "lancia-2000-berlina": { videoId: "w7uPBw89pqg", title: "Lancia 2000 IE Berlina 1973 - Stelvio Automobili, Copenhagen", channel: "Stelvio Automobili" },
  "rolls-royce-silver-shadow": { videoId: "0ByTjy4D6E4", title: "Why This Is THE Epitome British 1960s LUXURY - Rolls Royce Silver Shadow", channel: "Number 27" },
  "jaguar-e-type": { videoId: "j_VM1Wc9cGc", title: "1966 Jaguar E-Type Series 1 Coupé overview & road test | now available from classicshowcase.com", channel: "Classic Showcase" },
};
