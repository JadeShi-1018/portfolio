import React from "react"
import Link from "next/link"

export const Intro = ({ title, description, image, buttons }) => {
  return (
    <div className='bg-secondary py-5 px-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-sm-6'>
            <h1 className='text-primary fw-bold display-3'>{title}</h1>
            <p>{description}</p>
            <div className='text-center d-flex flex-column flex-sm-row justify-content-center align-items-center'>
              {buttons.map((value, index) => (
                <div key={index} className='my-2 mx-2'>
                  <Link href={value.link} passHref>
                    <a
                      className={`btn ${
                        value.isPrimary ? "btn-primary" : "btn-outline-primary"
                      } px-4 py-2`}
                      style={{ minWidth: "140px", display: "inline-block" }}
                    >
                      {value.title}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='col-sm-6 text-end'>
            <img
              className='img-fluid my-3 card-image'
              style={{ maxWidth: "200px", height: "auto" }}
              src={image}
              alt='profile of Jade Shi'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const About = ({ title, description }) => {
  return (
    <div id='about' className='bg-white py-5 px-5'>
      <div className='container'>
        <h1 className='text-primary fw-bold'>{title}</h1>
        <div className='px-sm-5'>
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
