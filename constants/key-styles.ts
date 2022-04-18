export type KeySize =
  | '0.25'
  | '0.5'
  | '1'
  | '1.25'
  | '1.5'
  | '1.75'
  | '2'
  | '2.25'
  | '2.75'
  | '6.25';

interface KeyStyles {
  [Key: string]: string;
}

export const keyWidthStyles: KeyStyles = {
  '0.25': 'w-3',
  '0.5': 'w-6',
  '1': 'w-12',
  '1.25': 'w-15',
  '1.5': 'w-18',
  '1.75': 'w-21',
  '2': 'w-24',
  '2.25': 'w-27',
  '2.75': 'w-33',
  '6.25': 'w-75',
};

export const keyHeightStyles: KeyStyles = {
  '0.5': 'h-6',
  '1': 'h-12',
  '1.5': 'h-18',
  '2': 'h-24',
};
