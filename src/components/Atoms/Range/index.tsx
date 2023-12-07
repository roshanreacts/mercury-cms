import * as Slider from '@radix-ui/react-slider';
import styled from "@emotion/styled";
import theme from '~/theme';

export const SliderRoot = styled(Slider.Root)( {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,
  height: 20,
});

export const SliderTrack = styled(Slider.Track)( {
  backgroundColor: theme.colors.blackA,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 5,
});

export const SliderRange = styled(Slider.Range)( {
  position: 'absolute',
  backgroundColor: theme.colors.secondary,
  borderRadius: '9999px',
  height: '100%',
});

export const SliderThumb:any = styled(Slider.Thumb)( {
  display: 'block',
  width: 13,
  height: 13,
  backgroundColor: theme.colors.whiteA,
  border:`1px solid ${theme.colors.secondary}`,
  borderRadius: 2,
});
