import { type ChangeEvent, type JSX } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  selectChatterThreshold,
  setChatterThreshold,
} from '../../state/settingsSlice';
import Tooltip from '../Tooltip';

const MIN_THRESHOLD = 10;
const MAX_THRESHOLD = 100;
const STEP = 10;

const ChatterThresholdSlider = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const chatterThresholdMs = useAppSelector(selectChatterThreshold);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value);

    if (Number.isNaN(nextValue)) {
      return;
    }

    dispatch(setChatterThreshold(nextValue));
  };

  return (
    <Tooltip text={`${chatterThresholdMs}ms`}>
      <div className="w-40">
        <input
          type="range"
          min={MIN_THRESHOLD}
          max={MAX_THRESHOLD}
          step={STEP}
          value={chatterThresholdMs}
          onChange={handleChange}
          className="w-full right-0 h-2 rounded-lg appearance-none cursor-pointer bg-zinc-600 dark:bg-slate-200 outline-none accent-green-600"
          aria-label="Chatter threshold in milliseconds"
        />
      </div>
    </Tooltip>
  );
};

export default ChatterThresholdSlider;
