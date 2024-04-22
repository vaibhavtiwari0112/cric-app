import React from "react";
import { Schedule } from "../assets/data/scheduleData";
import backgroundImage from "../assets/images/schedule.webp";

const CricketSchedule = () => {
  // Filter out items with name "native_news_index_random_2"
  const filteredSchedule = Schedule.matchScheduleMap.filter(
    (item) =>
      !item.adDetail || item.adDetail.name !== "native_news_index_random_2"
  );

  return (
    <div className="flex justify-center relative text-black">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -1 }}
      />
      <div className="schedule-container mt-28 w-full max-w-md">
        {filteredSchedule.map(
          (item, index) =>
            // Check if the schedule has at least one match
            item.scheduleAdWrapper &&
            item.scheduleAdWrapper.matchScheduleList.length > 0 && (
              <div
                key={index}
                className="mb-6 border shadow-blue-gray-700 bg-blue-gray-900 bg-opacity-20  backdrop-blur-md shadow-lg rounded-lg border-opacity-20 p-4"
              >
                <div className="series-name mb-2 font-bold">
                  {item.scheduleAdWrapper.date}
                </div>
                {item.scheduleAdWrapper.matchScheduleList.map(
                  (match, index) => (
                    <div key={index} className="match-info mb-2">
                      <div className="series-name mb-2 font-bold">
                        {match.seriesName}
                      </div>
                      {match.matchInfo.map((info, index) => (
                        <div key={index} className="match-details">
                          <div className="match-desc">{info.matchDesc}</div>
                          <div className="teams">
                            <div className="team">
                              {info.team1.teamName} ({info.team1.teamSName}) vs{" "}
                              {info.team2.teamName} ({info.team2.teamSName})
                            </div>
                            <div className="venue">
                              {info.venueInfo.ground}, {info.venueInfo.city}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CricketSchedule;
