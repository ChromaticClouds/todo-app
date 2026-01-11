import * as React from 'react';
import { format } from 'date-fns';

/**
 * Components
 */
import { Calendar } from '@/components/ui/calendar.jsx';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover.jsx';
import { Button } from '@/components/ui/button.jsx';

/**
 * Assets
 */
import { CalendarIcon } from 'lucide-react';


/**
 * @typedef {import('@tanstack/react-form').Updater} Updater
 */

/**
 * @typedef {Object} Props
 * @property {import('react-day-picker').DateRange} value
 * @property {(Updater<string>) => void} onChange
 */

/**
 * @param {Props} props
 */
export const DateRangePicker = ({ value, onChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal"
        >
          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, 'yyyy-MM-dd')} ~{' '}
                {format(value.to, 'yyyy-MM-dd')}
              </>
            ) : (
              format(value.from, 'yyyy-MM-dd')
            )
          ) : (
            'Choose date'
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          captionLayout='dropdown'
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
