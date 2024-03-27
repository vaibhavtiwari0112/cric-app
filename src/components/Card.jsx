import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ScoreCard from "./ScoreCard";

const CardWithLink = ({ match, matchType, matchScore }) => {
  const { team1, team2, matchDesc, status } = match;

  const handleScorecardButtonClick = () => {
    // Construct the scorecard path
    const scorecardPath = `/get-scorecard/${match.matchId}`;
    console.log("Scorecard Path:", scorecardPath); // Print the scorecard path in console
  };

  return (
    <Card className="mt-6 w-96 bg-opacity-20 bg-white backdrop-blur-md shadow-lg rounded-lg border border-opacity-20 border-white">
      <CardBody>
        <Typography
          color={
            matchType === "International"
              ? "blue"
              : matchType === "League"
              ? "brown"
              : matchType === "Domestic"
              ? "red"
              : "green"
          }
        >
          {matchType}
        </Typography>
        <div className="flex justify-between mb-2">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              style={{ marginRight: "4px" }}
            >
              {team1 ? team1.teamName : "-"}
            </Typography>
            <Typography color="black">
              Runs: {matchScore?.team1Score?.inngs1?.runs || "-"} /{" "}
              {matchScore?.team1Score?.inngs1?.wickets || "-"}
            </Typography>
            {matchScore?.team1Score?.inngs2 && (
              <Typography color="black">
                Runs: {matchScore.team1Score.inngs2.runs} /{" "}
                {matchScore.team1Score.inngs2.wickets}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h5" color="blue-gray">
              {team2 ? team2.teamName : "-"}
            </Typography>
            <Typography color="black">
              Runs: {matchScore?.team2Score?.inngs1?.runs || "-"} /{" "}
              {matchScore?.team2Score?.inngs1?.wickets || "-"}
            </Typography>
            {matchScore?.team2Score?.inngs2 && (
              <Typography color="black">
                Runs: {matchScore.team2Score.inngs2.runs} /{" "}
                {matchScore.team2Score.inngs2.wickets}
              </Typography>
            )}
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography style={{ color: "green" }}>{match.matchFormat}</Typography>
        <Typography color="deep-purple">{status}</Typography>
        <Button
          size="sm"
          variant="text"
          className="flex items-center gap-2"
          component={Link}
          to={`/get-scorecard/${match.matchId}`}
          onClick={handleScorecardButtonClick} // Call handleScorecardButtonClick on button click
        >
          <Link to={`/get-scorecard/${match.matchId}`}>Scorecard</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWithLink;
