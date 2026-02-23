import type { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#7B2CFF',
    colorInfo: '#7B2CFF',
    borderRadius: 10,
    fontSize: 14
  },
  components: {
    Layout: {
      bodyBg: '#0B0B10',
      headerBg: '#0B0B10',
      siderBg: '#0B0B10'
    },
    Menu: {
      darkItemBg: '#0B0B10',
      darkSubMenuItemBg: '#0B0B10',
      darkItemSelectedBg: 'rgba(123, 44, 255, 0.18)',
      darkItemSelectedColor: '#EBDDFF'
    },
    Card: {
      colorBgContainer: '#101019'
    }
  },
  algorithm: [] // mantendo simples; vamos controlar com CSS + tokens
}