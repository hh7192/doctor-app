import React, {useEffect, useState} from "react";
import "./Profile.css";
import {useParams} from "react-router-dom";
import NotFound from "../../components/notfound/NotFound";
import Loading from "../../components/loading/Loading";
import {DynamicStar} from "react-dynamic-star";

const Profile = () => {
  // FETCHING DATA
  const [doctor, setDoctor] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [hasFound, setHasFound] = useState(true);

  useEffect(() => {
    fetch(`https://www.tebinja.com/api/v1/doctors/${paramsId}`)
      .then((response) => {
        if (response.status >= 400) {
          setHasFound(false);
        }
        return response.json();
      })
      .then((data) => {
        return setDoctor(data.doctor), setIsLoad(true);
      });
    console.log(doctor);
  }, []);

  // GETTING EVERY DOCTOR BY ID FROM DOCTORS ARRAY
  const params = useParams();
  const paramsId = Number(params.id);

  if (!isLoad)
    return (
      <div>
        <Loading />
      </div>
    );
  else if (!hasFound) return <NotFound />;
  else {
    return (
      <div>
        <aside class='profile-card'>
          <header>
            <a target='_blank' href='#'>
              <img
                src='http://lorempixel.com/150/150/people/'
                class='hoverZoomLink'
              />
            </a>

            <h1>John Doe</h1>

            <h2>Better Visuals</h2>
          </header>

          <div class='profile-bio'>
            <p>
              It takes monumental improvement for us to change how we live our
              lives. Design is the way we access that improvement.
            </p>
          </div>

          <ul class='profile-social-links'>
            <li>
              <a target='_blank' href='https://www.facebook.com/creativedonut'>
                <i class='fa fa-facebook'></i>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://twitter.com/dropyourbass'>
                <i class='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://github.com/vipulsaxena'>
                <i class='fa fa-github'></i>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.behance.net/vipulsaxena'>
                <i class='fa fa-behance'></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
};

export default Profile;
