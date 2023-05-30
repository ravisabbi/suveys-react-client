import { display } from "@mui/system";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "../scss/executivesChart.scss";
import {
  useGetAllUsersDataQuery,
  useGetAllSurveyDataOfUserQuery
} from "../service/post";
import CustomLoader from "./CustomLoader";

const data = [
  {
    id: 9,
    userName: "Mohan",
    surveysCount: 1,
  },

  {
    id: 1,
    userName: "Varun",
    surveysCount: 9,
  },
  {
    id: 2,
    userName: "Naidu",
    surveysCount: 4,
  },
  {
    id: 3,
    userName: "Mani",
    surveysCount: 6,
  },
  {
    id: 4,
    userName: "Adharsh",
    surveysCount: 3,
  },
  {
    id: 6,
    userName: "raju",
    surveysCount: 2,
  },
  {
    id: 7,
    userName: "ravi",
    surveysCount: 3,
  },
];

export default function UsersChart() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);
  const [inActive, setInActive] = useState(0);
 
  const responseInfo = useGetAllSurveyDataOfUserQuery(5);
  console.log(responseInfo);
  
  const { isLoading, isError, isSuccess } = responseInfo;

  useEffect(() => {
    if (isSuccess) {
      setData(responseInfo.data.last5daysData);
      setActive(responseInfo.data.no_completed);
      setInActive(responseInfo.data.no_of_pending);
    }
  }, [data, isSuccess]);

  let datesArray = [];
  for(let i = 0; i<5;i++){
    const date = new Date();
    date.setDate(date.getDate()-i);
    const formattedDate = date.toISOString().split("T")[0];
    datesArray.push({surveyDate:formattedDate,surveyCount:0});
    
  }

  const formattedData = datesArray.map((eachDate) => {
    const isMatching = data.find((dateItem) => dateItem.surveyDate === eachDate.surveyDate);
    if(isMatching){
      return isMatching;
    }
    else{
      return eachDate;
    }
  })
  formattedData.sort((a, b) => a.surveyDate.localeCompare(b.surveyDate));

  const finalDatesData = formattedData.map((entry) => {
    const date = new Date(entry.surveyDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      
      month: 'short',
      day: 'numeric'
    }).format(date);
    return { ...entry, surveyDate: formattedDate };
  });


  if (isLoading) return <CustomLoader />;

  return (
    <div className="executives-chart-container">
      <div className="dashboard-cards-container">
        <div className="dasboard-card" style={{ backgroundColor: "#D1E9FC" }}>
          <h1 className="card-number" style={{ color: "#0F2864" }}>
            {active + inActive}
          </h1>
          <p className="card-text" style={{ color: "#46548E" }}>
            Total Surveys
          </p>
        </div>

        <div className="dasboard-card" style={{ backgroundColor: "#D0F2FE" }}>
          <h1 className="card-number" style={{ color: "#2B438C" }}>
            {active}
          </h1>
          <p className="card-text" style={{ color: "#465B9F" }}>
            Completed
          </p>
        </div>

        <div className="dasboard-card" style={{ backgroundColor: "#FBE7D9" }}>
          <h1 className="card-number" style={{ color: "#7C242E" }}>
            {inActive}
          </h1>
          <p className="card-text" style={{ color: "#9C505B" }}>
            Pending
          </p>
        </div>
      </div>

      <BarChart
        width={600}
        height={400}
        data={finalDatesData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="surveyDate" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="surveyCount" fill="#4AA3B9" />
      </BarChart>
    </div>
  );
}
