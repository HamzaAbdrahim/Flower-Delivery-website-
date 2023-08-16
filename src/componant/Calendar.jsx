import { useState } from "react";
import styles from "../style";
import assets from "../assets/imges";

function Calendar(prop) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonths, setCurrentMonths] = useState(currentMonth);
  const [currentYears, setCurrentYears] = useState(currentDate.getFullYear());

  const handlePrevMonth = () => {
    setCurrentMonths((prevMonth) => {
      const newMonth = prevMonth - 1;
      return newMonth < 0 ? 11 : newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonths((prevMonth) => {
      const newMonth = prevMonth + 1;
      return newMonth > 11 ? 0 : newMonth;
    });
    setCurrentYears((prevYear , prevMonth) => {
      const newYear = prevMonth === 11 ? prevYear + 1 : prevYear;
      return newYear;
    });
  };


  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push(<ul key={`empty-${i}`} className="calendar-day"></ul>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay = i === currentDate.getDate(); // Check if the day is the current day
    calendarDays.push(
      <div
        key={`day-${i}`}
        onClick={() => handleDayClick(i)}
        className={`cursor-pointer ${styles.flexCenter} ${styles.Caption} ${
          selectedDay === i ? "bg-blacky !text-white" : ""
        } !font-medium p-2 !text-blacky calendar-day ${
          isCurrentDay ? "bg-[#D2D2D7]" : ""
        }`}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={`p-6 border ${styles.borderweb} duration-300 ease-in-out -bottom-28 ${prop.show ? "opacity-1 translate-x-72" : "opacity-0"} w-fit absolute z-10 bg-white ml-auto`}>
      <div className="flex flex-col">
        <div className="inline-flex gap-4 mb-4 mx-auto">
          <img
            src={assets.chevron_left}
            alt="chevron_left"
            onClick={handlePrevMonth}
            className="w-4 h-4 cursor-pointer"
          />
          <p className={`${styles.heading6}`}>
            {monthNames[currentMonths]} {currentYears}
          </p>
          <img
            src={assets.chevron_right}
            alt="chevron_right"
            onClick={handleNextMonth}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
        <ul className="inline-flex gap-2 mb-7 mx-auto">
          {days.map((day, index) => (
            <li className={`${styles.Caption} !text-gray`} key={index}>
              {day}
            </li>
          ))}
        </ul>
      </div>
      <div className={`grid grid-cols-7 gap-3`}>{calendarDays}</div>
      <div></div>
    </div>
  );
}

export default Calendar;