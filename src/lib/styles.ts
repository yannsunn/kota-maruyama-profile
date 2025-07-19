// 共通のスタイル設定

// セクションのスタイル
export const sectionStyles = {
  default: "py-16 sm:py-20 px-4",
  withBackground: "py-16 sm:py-20 px-4 bg-white",
  withGradient: "py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100",
  dark: "py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900"
};

// コンテナのスタイル
export const containerStyles = {
  default: "max-w-6xl mx-auto",
  narrow: "max-w-4xl mx-auto",
  wide: "max-w-7xl mx-auto"
};

// 見出しのスタイル
export const headingStyles = {
  section: "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900",
  sectionWhite: "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white",
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white",
  heroSub: "block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light mt-2 opacity-90",
  cardTitle: "text-xl font-bold text-gray-900 mb-2",
  cardSubtitle: "text-lg font-semibold text-gray-800 mb-3"
};

// ボタンのスタイル
export const buttonStyles = {
  primary: "inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group",
  secondary: "flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 lg:px-8 lg:py-5 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20",
  ghost: "flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 group",
  card: "flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 group hover:scale-105"
};

// カードのスタイル
export const cardStyles = {
  default: "p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300",
  gradient: "p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300",
  experience: "flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300",
  business: "group relative p-8 lg:p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full",
  advisory: "p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full",
  info: "bg-gray-50 p-6 rounded-2xl"
};

// グリッドのスタイル
export const gridStyles = {
  twoColumns: "grid md:grid-cols-2 gap-12 items-center",
  threeColumns: "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10",
  fourColumns: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",
  gallery: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8",
  responsive: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
};

// テキストのスタイル
export const textStyles = {
  body: "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed",
  bodyCenter: "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center md:text-left",
  small: "text-sm text-gray-600",
  link: "text-blue-700 hover:text-blue-900 hover:underline",
  linkIcon: "text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1",
  badge: "px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium",
  period: "text-sm font-semibold text-blue-700 mb-1"
};

// アイコンのスタイル
export const iconStyles = {
  default: "w-5 h-5",
  medium: "w-6 h-6",
  large: "w-8 h-8",
  floating: "w-5 h-5 md:w-6 md:h-6",
  button: "group-hover:scale-110 transition-transform duration-300"
};

// 画像のスタイル
export const imageStyles = {
  hero: "object-cover",
  about: "rounded-2xl shadow-2xl object-cover",
  gallery: "object-cover group-hover:scale-110 transition-transform duration-500",
  aspect: "relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
};

// フレックスのスタイル
export const flexStyles = {
  center: "flex items-center justify-center",
  centerGap: "flex items-center justify-center gap-3",
  between: "flex items-center justify-between",
  column: "flex flex-col",
  wrap: "flex flex-wrap gap-2",
  heroButtons: "flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start",
  contactGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto"
};

// 背景のスタイル
export const backgroundStyles = {
  hero: "absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
  heroOverlay: "absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-gray-800/20",
  heroRadial: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent",
  galleryOverlay: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
};

// 特殊なスタイル
export const specialStyles = {
  scrollIndicator: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2",
  scrollBar: "w-1 h-12 bg-gradient-to-b from-white/80 to-transparent rounded-full",
  floatingIcon: "absolute -top-4 -right-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg",
  profileRing: "absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 via-blue-600 to-gray-600 p-1",
  profileImage: "absolute inset-2 rounded-full overflow-hidden shadow-2xl"
};

// レスポンシブなスペーシング
export const spacing = {
  section: "py-16 sm:py-20",
  container: "px-4",
  grid: "gap-3 sm:gap-4 md:gap-6 lg:gap-8",
  card: "space-y-8",
  text: "space-y-6",
  buttons: "space-y-4"
};

// 数値定数
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// アニメーション用の定数
export const animationDurations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  infinite: 8
};

// Z-index の管理
export const zIndex = {
  background: 0,
  content: 10,
  overlay: 20,
  modal: 30,
  tooltip: 40
};