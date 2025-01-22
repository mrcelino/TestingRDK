import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { getDay, isEqual, isToday, isSameMonth, format } from "date-fns";
import Image from "next/image";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface CalendarProps {
  days: Date[];
  selectedDay: Date;
  currentMonth: string;
  highlightDates: Date[];
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onSelectDay: (day: Date) => void;
}

export default function Calendar({
  days,
  selectedDay,
  currentMonth,
  highlightDates,
  onPreviousMonth,
  onNextMonth,
  onSelectDay,
}: CalendarProps) {
  return (
    <div className="mt-16 relative">
      <Image
        src="/images/jadwal/mini-calendar.svg"
        width={203}
        height={203}
        alt="icon_mini_calendar"
        className="absolute w-[53px] h-[53px] md:w-[108px] md:h-[108px] lg:w-[203px] lg:h-[203px] -bottom-16 -right-32"
      />
      <div className="mx-auto bg-white h-[494px] w-[637px] rounded-[50px] shadow-md">
        <div className="w-full h-[61px] flex flex-row justify-around items-center bg-[#15575B] rounded-t-[50px] px-36">
          <button
            type="button"
            onClick={onPreviousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <h2 className="flex-auto font-semibold text-[#fbfbfb] text-center">
            {/* {currentMonth} */}
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={onNextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="px-1 py-2 grid grid-cols-7 text-center text-sm leading-6 text-white bg-[#3D6C6F] italic shadow-md">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="mt-2 grid grid-cols-7 text-sm gap-y-5">
          {days.map((day, dayIdx) => {
            const dayOfWeek = getDay(day);
            const isHighlighted = highlightDates.some((highlightDay) =>
              isEqual(day, highlightDay)
            );

            return (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[dayOfWeek]
                    ? colStartClasses[dayOfWeek]
                    : "",
                  "py-1.5"
                )}
              >
                <button
                  type="button"
                  onClick={() => onSelectDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) ? "text-white" : "",
                    !isEqual(day, selectedDay) && isToday(day)
                      ? "text-[#F4AA3D]"
                      : "",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, new Date(currentMonth))
                      ? "text-[#15575B]"
                      : "",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, new Date(currentMonth))
                      ? "text-gray-400"
                      : "",
                    isHighlighted ? "bg-[#F4AA3D]" : "",
                    isEqual(day, selectedDay) && isToday(day)
                      ? "bg-[#fceba5]"
                      : "",
                    isEqual(day, selectedDay) && !isToday(day)
                      ? "bg-[#15575B]"
                      : "",
                    !isEqual(day, selectedDay) ? "hover:bg-gray-200" : "",
                    isEqual(day, selectedDay) || isToday(day)
                      ? "font-semibold"
                      : "",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full italic font-semibold text-xl"
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

let colStartClasses: string[] = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
