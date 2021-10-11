import "./style.css";

const Timer = ({ days, hours, minutes, seconds }) => {
  const timeData = [
    {
      num: days,
      title: "Days",
    },
    {
      num: hours,
      title: "Hour",
    },
    {
      num: minutes,
      title: "Minutes",
    },
    {
      num: seconds,
      title: "Seconds",
    },
  ];

  return (
    <div className="bg-primaryLight py-5 mt-8  font-raleway w-full mx-auto md:mx-0 max-w-sm rounded-lg">
      <h5 className="text-center uppercase text-lg">Comming soon</h5>
      <div className="flex justify-center mx-auto mt-5 flex-wrap">
        {timeData.map((item, i) => (
          <Times
            title={item.title}
            num={item.num.toString().padEnd(2, "0")}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Timer;

const Times = ({ title, num }) => (
  <span className="time ml-2 flex flex-col flex-nowrap items-center gap-4">
    <span className=" w-14 h-14 flex items-center justify-center rounded-full bg-dark text-white">
      {num}
    </span>
    <span className="text-xs">{title}</span>
  </span>
);
