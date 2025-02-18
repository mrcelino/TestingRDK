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
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="mt-8 md:mt-8 lg:mt-16 relative">
      <Image
        src="/images/jadwal/mini-calendar.svg"
        width={130}
        height={130}
        alt="icon_mini_calendar"
        className="absolute w-[38px] h-[38px] md:w-[78px] md:h-[78px] lg:w-[130px] lg:h-[130px] -bottom-2 -right-3 md:-bottom-8 md:-right-4 lg:-bottom-12 lg:-right-[40px]"
      />
      <div className="mx-auto bg-white w-[272px] h-[181px] md:w-[384px] md:h-[287px] lg:w-[637px] lg:h-[494px] rounded-[20px] md:rounded-[50px]  lg:rounded-[50px] shadow-md">
        {/* month container */}
        <div className="w-full h-[19px] md:h-[41px] lg:h-[61px] flex flex-row justify-around items-center bg-[#15575B] rounded-t-[50px] px-14 md:px-14 lg:px-36">
          <button
            type="button"
            onClick={onPreviousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-4 w-4 md:h-7 md:w-7 lg:w-10 lg:h-10" aria-hidden="true" />
          </button>
          <h2 className="flex-auto font-semibold text-[10px] md:text-[12px] lg:text-[20px] text-[#fbfbfb] text-center italic font-body">
            {/* {currentMonth} */}
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={onNextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-4 w-4 md:h-7 md:w-7 lg:w-10 lg:h-10" aria-hidden="true" />
          </button>
        </div>
        {/* days of the week container */}
        <div className="px-0.5 lg:px-1 -py-1 md:py-1 lg:py-2 grid grid-cols-7 text-center text-[10px] md:text-[12px] lg:text-sm md:leading-5 lg:leading-6 text-white bg-[#3D6C6F] italic shadow-md">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>
        {/* days container */}
        <div className="-mt-0.5 md:mt-1 lg:mt-2 grid grid-cols-7 text-sm md:gap-y-1.5 lg:gap-y-5">
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
                    "mx-auto flex h-[13px] w-[13px] md:h-4 md:w-4 lg:h-8 lg:w-8 items-center justify-center rounded-full italic font-semibold text-[10px] md:text-[12px] lg:text-xl"
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
