export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_class: number;
};

// const vocid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
const vocid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: {
    kanji_name: '東京', confirmed_class: 1960
  },
  Chiba: {
    kanji_name: '千葉', confirmed_class: 249
  },
  Tottori: {
    kanji_name: '鳥取', confirmed_class: 2
  },
  Shiga: {
    kanji_name: '滋賀', confirmed_class: true
  },
}