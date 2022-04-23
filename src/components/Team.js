import { Center } from "@chakra-ui/react";
import React from "react";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import "../assets/styles/Team.css";
const Team = () => {
  return (
    <div id="team">
      <Center>
        <div className="heading-minimal" style={{ marginTop: "80px" }}>
          <div className="sub-title"> TEAM MEMBERS</div>
          <h3 className="head-title">Meet Our Best Team</h3>
          <div className="bottom-dots  clearfix center">
            <span className="dot line-dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </Center>

      <div className="team-cards">
        <div className="team-subcards">
          <img width="300px" src={team1} />
          <h3
            className=""
            style={{ fontSize: "30px", fontWeight: "400", marginLeft: "20px" , marginTop:"10px"}}
          >
            Alizeh Anderson
          </h3>
          <p
            className=""
            style={{ fontSize: "15px", fontWeight: "400", marginLeft: "20px" }}
          >
            Senior Chef
          </p>
        </div>
        <div className="team-subcards">
          <img width="300px" src={team2} />

          <h3 className="" style={{ fontSize: "30px" , fontWeight: "400", marginLeft: "20px" , marginTop:"10px"}}>
            Angelina John Doe
          </h3>
          <p className="" style={{ fontSize: "15px", fontWeight: "400", marginLeft: "20px"  }}>
            Master Chef
          </p>
        </div>
        <div className="team-subcards">
          <img width="300px" src={team3} />

          <h3 className="" style={{ fontSize: "30px" , fontWeight: "400", marginLeft: "20px" , marginTop:"10px"}}>
            Andre Smith
          </h3>
          <p className="" style={{ fontSize: "15px", fontWeight: "400", marginLeft: "20px"  }}>
            Professor
          </p>
        </div>
        <div className="team-subcards">
          <img width="300px" src={team4} />

          <h3 className="" style={{ fontSize: "30px" , fontWeight: "400", marginLeft: "20px" , marginTop:"10px"}}>
            Christina Chi
          </h3>
          <p className="" style={{ fontSize: "15px", fontWeight: "400", marginLeft: "20px"  }}>
            Psychologist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
