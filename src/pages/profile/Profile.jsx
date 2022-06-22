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
  else if (!hasFound) return "<NotFound />";
  else {
    console.log(doctor);
    return (
      <div className='profileContainer'>
        <aside className='profile-card'>
          <header>
            <a target='_blank'>
              <img
                className='avatar'
                src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${doctor.url}`}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://icon-library.com/images/doctor-icon-png/doctor-icon-png-6.jpg";
                  e.currentTarget.style = "width : 200px; height: 200px";
                }}
              />
            </a>

            <div className='rating'>
              <DynamicStar rating={doctor.rate} width={"30"} height={"30"} />
              <h4 className='h4'>{`امتیاز ${doctor.rate} از ${doctor.ratingCount} رای`}</h4>
            </div>
            <h1 className='h1'>{`دکتر ${doctor.fname} ${doctor.lname}`}</h1>
            <h3 className='h3'>{doctor.spUnis[0].specialty.name}</h3>
            <h3 className='h3'>{doctor.clinics[0].name}</h3>
            <h5 className='h5'>{`کد نظام پزشکی: ${doctor.pezeshkCode}`}</h5>
            <h5 className='h5'>{`دانشگاه: ${doctor.university.name}`}</h5>
          </header>

          <div className='profile-bio'>
            <p>{`آدرس: ${doctor.clinics[0].address}`}</p> <br />
            <p>{`تلفن: ${doctor.clinics[0].telePhones[0].phone}`}</p>
            <p>{`ویزیت: ${doctor.clinics[0].clinicsTimeSheets[0].label}`}</p>
            <p>{`${doctor.clinics[0].clinicsTimeSheets[0].startTime} - ${doctor.clinics[0].clinicsTimeSheets[0].endTime}`}</p>
          </div>

          <ul className='profile-social-links'>
            <li>
              <a
                target='_blank'
                href={`https://www.instagram.com/${doctor.clinics[0].instagram}`}>
                <i className='uil uil-instagram-alt'></i>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href={`https://t.me/${doctor.clinics[0].telegram}`}>
                <i className='uil uil-telegram-alt'></i>
              </a>
            </li>
            <li>
              <a target='_blank' href={`${doctor.clinics[0].webSite}`}>
                <i className='uil uil-window'></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
};

export default Profile;
