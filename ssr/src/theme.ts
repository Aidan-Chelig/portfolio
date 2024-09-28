import { ComponentStyleConfig, extendTheme, ThemeConfig } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: 'dark',
  } as ThemeConfig,
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Rock Salt',
        mb: 2,
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Roboto',
      },
    },
  } as ComponentStyleConfig[],
});
