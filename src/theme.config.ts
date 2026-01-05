 // src/theme.config.ts

 // 1. Import the themes you want to use
 import { defaultTheme } from './themes/default'; // The original theme
 import { oceanTheme } from './themes/ocean'; // The one we added before
 import { forestTheme } from './themes/forest'; // New: Forest
 import { sunsetTheme } from './themes/sunset'; // New: Sunset
 import { monochromeTheme } from './themes/monochrome'; // New: Monochrome
 import { draculaTheme } from './themes/dracula'; // New: Dracula
 import { solarizedLightTheme } from './themes/solarizedLight'; // New: Solarized Light
 import { nordTheme } from './themes/nord'; // New: Nord

 // 2. Set the active theme
 // To change themes, just swap `defaultTheme` with `oceanTheme` or any other theme you create.
 const activeTheme = defaultTheme;

 // 3. Export the active theme's configuration for the rest of the site
 export const themeConfig = {
 	colors: activeTheme.colors,
 	fonts: activeTheme.fonts,
 };