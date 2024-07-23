/** @type { import('@storybook/react').Preview } */
import Image from "next/image";
import "../pages/global.css";

export const decorators = [
  (Story) => {
    return <Story />;
  },
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// 画像を表示させるため、Imageコンポーネントの最適化を無効
Image.defaultProps = {
  unoptimized: true,
};

export default preview;
