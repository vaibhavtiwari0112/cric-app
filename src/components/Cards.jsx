import React, { useState } from "react";
import CardWithLink from "./Card";
import { ButtonGroup, Button } from "@material-tailwind/react";

const Cards = ({ data }) => {
  const [selectedMatchType, setSelectedMatchType] = useState(null);

  if (!data || !data.typeMatches || !Array.isArray(data.typeMatches)) {
    return <div>No match data available</div>;
  }

  const matchesData = data.typeMatches;

  return (
    <div>
      <nav className="flex container m-4 mt-28 justify-center">
        <ButtonGroup variant="gradient">
          {matchesData.map((typeMatch) => (
            <Button
              key={typeMatch.matchType}
              onClick={() => setSelectedMatchType(typeMatch.matchType)}
              className={`mx-2 ${
                selectedMatchType === typeMatch.matchType
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {typeMatch.matchType}
            </Button>
          ))}
        </ButtonGroup>
      </nav>

      <div className={`flex overflow-x-auto flex-row`}>
        {matchesData.map((typeMatch) => {
          const { matchType, seriesMatches } = typeMatch;

          return (
            <div
              key={matchType}
              className={`justify-center px-4 ${
                selectedMatchType ? "flex flex-wrap flex-row" : ""
              }`}
            >
              {(selectedMatchType === null ||
                selectedMatchType === matchType) &&
                seriesMatches.map((seriesMatch) => {
                  const { seriesAdWrapper } = seriesMatch;

                  if (seriesAdWrapper && seriesAdWrapper.matches) {
                    return seriesAdWrapper.matches.map((match) => (
                      <CardWithLink
                        key={match.matchInfo.matchId}
                        match={match.matchInfo}
                        matchType={matchType}
                        matchScore={match.matchScore}
                      />
                    ));
                  } else {
                    return null;
                  }
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
