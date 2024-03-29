import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  const initialCount = 0;
  //const [count, setCount] = React.useState(0)
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia"></img>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              email={badge.email}
              avatarUrl={badge.avatarUrl}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                  -
                </button>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                  +
                </button>
                <button
                  onClick={() => {
                    setCount((prevCount) => prevCount - 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase Count {count}
                </button>
                <Link
                  to={`/badges/${badge.id}/edit`}
                  className="btn btn-primary mb-4"
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Borrar
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
