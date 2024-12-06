export const colors = {
  indigoDye: {
    primary: '#033A5B',
    secondary: '#0C4D75',
    tertiary: '#084461',
  },
  pictonBlue: {
    primary: '#22B0EB',
    secondary: '#28A2D4',
  },
  additional: {
    lapisLazuli: '#126190',
    black: '#000000',
    white: '#FFFFFF',
  },
} as const;

export type ColorScheme = typeof colors;
