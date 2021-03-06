import React, { Component, Fragment } from "react";
export default class Twitter extends Component {
  render() {
    return (
      <Fragment>
        <a className="" href="#">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25.125" cy="25.125" r="25.125" fill="#C4C4C4" />
            <path
              id="bird"
              d="M40.8128 15.7409C40.7682 15.6888 40.6946 15.6711 40.6319 15.6995C39.7021 16.1084 38.724 16.4023 37.7165 16.576C38.7861 15.7784 39.583 14.674 39.9917 13.4077C40.0114 13.347 39.991 13.2807 39.941 13.2413C39.8907 13.2018 39.8209 13.1968 39.7658 13.2293C38.5612 13.9374 37.2566 14.4366 35.8863 14.7135C34.6721 13.4645 32.9767 12.75 31.222 12.75C27.6533 12.75 24.7503 15.6275 24.7503 19.1646C24.7503 19.5924 24.7921 20.0161 24.8749 20.4275C19.9321 20.125 15.3104 17.7729 12.168 13.9523C12.1358 13.9131 12.0871 13.8913 12.0361 13.8964C11.9855 13.9002 11.9402 13.9286 11.9147 13.9719C11.3414 14.9468 11.0385 16.0623 11.0385 17.197C11.0385 19.1636 11.9399 21.0024 13.4748 22.2157C12.6846 22.1217 11.9128 21.8751 11.2169 21.4921C11.17 21.4659 11.1118 21.4662 11.0649 21.493C11.0181 21.5196 10.9885 21.5688 10.9872 21.6225L10.9866 21.7046C10.9866 24.5291 12.8642 27.0091 15.5356 27.8325C14.832 27.9449 14.102 27.9373 13.3844 27.8015C13.3315 27.7918 13.2761 27.8097 13.2398 27.8502C13.2038 27.8906 13.1917 27.9471 13.2082 27.9982C14.0093 30.4767 16.2351 32.2147 18.8259 32.4313C16.6648 34.0008 14.1103 34.8277 11.4112 34.8277C10.914 34.8277 10.4133 34.7983 9.92274 34.7412C9.85266 34.7333 9.78323 34.7746 9.75902 34.8413C9.73481 34.9085 9.76061 34.9836 9.82113 35.0218C12.7419 36.8786 16.1192 37.8596 19.5881 37.8596C30.9353 37.8596 37.7159 28.7231 37.7159 19.8904C37.7159 19.6445 37.7111 19.3998 37.7012 19.1557C38.9253 18.2682 39.9761 17.1818 40.8233 15.9243C40.8612 15.8681 40.8571 15.7933 40.8128 15.7409Z"
            />
          </svg>
        </a>

        <style jsx>
          {`
            * {
              color: #fff;
            }
            a {
              text-decoration: none;
              color: #fff;
            }
            a:hover {
              text-decoration: none;
              color: #fff;
            }
            li {
              line-height: 35px;
            }
            li.socials {
              display: flex;
              justify-content: space-between;
            }
            #bird {
              fill: #059ee8;
              stroke: #0291d6;
              stroke-width: 1px;
              stroke-dasharray: 125;
              stroke-dashoffset: -125;
              stroke-linecap: butt;
              -webkit-transition: all 2s ease-out;
              -moz-transition: all 2s ease-out;
              -ms-transition: all 2s ease-out;
              -o-transition: all 2s ease-out;
              transition: all 2s ease-out;
            }
            #bird:hover {
              fill: #0291d6;
              stroke-dashoffset: 0;
              stroke-dasharray: 125;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
