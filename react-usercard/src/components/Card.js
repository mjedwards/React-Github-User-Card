import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const UserCard = props => {
  return (
    <div className='flex-container'>
      <div className='card-container'>
        <Card>
          <CardImg
            top
            width='50%'
            src={props.url}
            alt='card image of the user'
          />
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>
              Followers: {props.followers} -{" "}
              {props.userFollowers.length === 1
                ? props.userFollowers.map(flwrs => {
                    return (
                      <div key={flwrs.id}>
                        <img
                          src={flwrs.avatar_url}
                          alt='avatar photo'
                          className='user-photo'
                        />
                      </div>
                    );
                  })
                : []}{" "}
              <br></br> Following: {props.following}
            </CardSubtitle>
            <br></br>
            <br></br>

            <h5>A little about me:</h5>
            <CardText>{props.bio}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserCard;
