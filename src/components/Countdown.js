import React, { useEffect } from 'react';

function Countdown () {
  useEffect(() => {
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
      let birthday = "Nov 16, 2022 09:20:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
              let headline = document.getElementById("headline"),
                  countdown = document.getElementById("countdown"),
                  content = document.getElementById("content");

              headline.innerText = "It's our wedding!";
              countdown.style.display = "none";
              content.style.display = "block";

              clearInterval(x);
            }
            //seconds
          }, 0);
          return null;
      }());
  }, [])
  return (
    <div
      id='countdown'
      className='countdow section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4>We will become a family in</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'></span>Days
              </li>
              <li>
                <span id='hours'></span>Hours
              </li>
              <li>
                <span id='minutes'></span>Minutes
              </li>
              <li>
                <span id='seconds'></span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
