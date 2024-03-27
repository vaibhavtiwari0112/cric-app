import React from "react";
import { useParams } from "react-router-dom";
import { scorecardData } from "../assets/data/scorecardData";
import backgroundImage from "../assets/scorecard.webp";

const ScoreCard = () => {
  const { matchId } = useParams();

  const scorecard = scorecardData.scoreCard.find(
    (scorecard) => scorecard.matchId.toString() === matchId
  );

  if (!scorecard) {
    return <div>Scorecard not found for match ID: {matchId}</div>;
  }

  return (
    <div
      className="relative flex flex-col justify-center items-center bg-black overflow-x-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        zIndex: -1,
      }}
    >
      <div className="sm:-mx-3 lg:-mx-5">
        <div className="inline-block min-w-full mt-16 py-2 sm:px-3 lg:px-5">
          <div className="overflow-x-auto">
            <h1 className="text-center text-3xl font-bold text-blue-600 m-4">
              ScoreCard
            </h1>

            {scorecardData.scoreCard.map((inning, inningIndex) => (
              <div key={inningIndex} className="mb-8">
                <h2 className="text-2xl font-bold content-center bg-blue-gray-100 w-2/4 text-indigo-800">
                  {inning.batTeamDetails.batTeamShortName} -{" "}
                  {inning.scoreDetails.runs}/{inning.scoreDetails.wickets}
                </h2>

                <div className="mb-6 w-full  content-center bg-opacity-20 bg-white backdrop-blur-md shadow-lg rounded-lg border border-opacity-20 border-white overflow-hidden">
                  <h3 className="text-xl font-bold text-green-600 text-center font-serif py-4">
                    Batting Scorecard
                  </h3>

                  <table className="min-w-full text-center content-center text-sm font-light text-surface dark:text-white">
                    <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                      <tr>
                        <th scope="col" className="px-3 py-2">
                          Batsman
                        </th>
                        <th scope="col" className="px-3 py-2">
                          Runs
                        </th>
                        <th scope="col" className="px-3 py-2">
                          Balls
                        </th>
                        <th scope="col" className="px-3 py-2">
                          4s
                        </th>
                        <th scope="col" className="px-3 py-2">
                          6s
                        </th>
                        <th scope="col" className="px-3 py-2">
                          Strike Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {inning.batTeamDetails &&
                        Object.values(inning.batTeamDetails.batsmenData).map(
                          (batsman, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0
                                  ? "bg-gray-100 dark:bg-neutral-900"
                                  : ""
                              }
                            >
                              <td className="whitespace-nowrap px-3 py-2">
                                {batsman.batName}
                                <br />
                                <span
                                  className={
                                    batsman.outDesc === "not out"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }
                                >
                                  {batsman.outDesc}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {batsman.runs}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {batsman.balls}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {batsman.fours}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {batsman.sixes}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {((batsman.runs / batsman.balls) * 100).toFixed(
                                  2
                                )}
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
                {inning.bowlTeamDetails && (
                  <div className="mb-6 w-full  content-center bg-opacity-20 bg-white backdrop-blur-md shadow-lg rounded-lg border border-opacity-20 border-white overflow-hidden">
                    <h3 className="text-xl font-bold text-red-600 text-center font-serif py-4">
                      Bowling Scorecard
                    </h3>
                    <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                      <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                          <th scope="col" className="px-3 py-2">
                            Bowler
                          </th>
                          <th scope="col" className="px-3 py-2">
                            Overs
                          </th>
                          <th scope="col" className="px-3 py-2">
                            Runs
                          </th>
                          <th scope="col" className="px-3 py-2">
                            Wickets
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(inning.bowlTeamDetails.bowlersData).map(
                          (bowler, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0
                                  ? "bg-gray-100 dark:bg-neutral-900"
                                  : ""
                              }
                            >
                              <td className="whitespace-nowrap px-3 py-2">
                                {bowler.bowlName}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {bowler.overs}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {bowler.runs}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2">
                                {bowler.wickets}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>

                    <p className="mt-4 text-cyan-600 flex justify-center">
                      Overs - {inning.scoreDetails.overs}, Run Rate -{" "}
                      {inning.scoreDetails.runRate}
                    </p>
                    <p className="flex text-indigo-600 justify-center">
                      <span className="underline">Extras</span> : Wides -{" "}
                      {inning.extrasData.wides}, No Balls -{" "}
                      {inning.extrasData.noBalls}, Byes -{" "}
                      {inning.extrasData.byes}
                    </p>

                    <div className="mb-6 w-full  content-center bg-opacity-20 bg-white backdrop-blur-md shadow-lg rounded-lg border border-opacity-20 border-white overflow-hidden">
                      <h3 className="text-xl font-bold text-yellow-600 text-center font-serif p-2">
                        Wickets Fall🥎
                      </h3>
                      <ul className="list-disc pl-5">
                        {Object.values(inning.wicketsData).map(
                          (wicket, wicketIndex) => (
                            <li key={wicketIndex} className="mb-2">
                              <span className="font-bold">
                                {wicket.batName}
                              </span>{" "}
                              - {wicket.wktRuns}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mb-6 w-full  content-center bg-opacity-20 bg-white backdrop-blur-md shadow-lg rounded-lg border border-opacity-20 border-white overflow-hidden">
                      <h3 className="text-xl mb-6 font-bold text-center text-purple-600">
                        Partnerships 🧑‍🤝‍🧑
                      </h3>
                      <ul className="list-disc pl-5">
                        {Object.values(inning.partnershipsData).map(
                          (partnership, partnershipIndex) => (
                            <li key={partnershipIndex} className="mb-2">
                              <span className="font-bold">
                                {partnership.bat1Name}
                              </span>
                              &{" "}
                              <span className="font-bold">
                                {partnership.bat2Name}
                              </span>{" "}
                              - {partnership.totalRuns} runs (
                              {partnership.totalBalls} balls)
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
