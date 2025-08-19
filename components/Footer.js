import React from "react"
import Link from "next/link"

export const Contact = ({ title, description, buttons }) => {
  return (
    <div id='contact' className='bg-white py-5 px-5'>
      <div className='container'>
        <h1 className='text-primary fw-bold'>{title}</h1>
        <div className='px-sm-5'>
          <p>{description}</p>
          <div>
            {buttons.map((value, index) => (
              <Link key={index} href={value.link} passHref>
                <a
                  className={`btn ${
                    value.isPrimary ? "btn-primary" : "btn-outline-primary"
                  } my-1 mx-3`}
                  style={{
                    backgroundColor: value.isPrimary
                      ? "#1a365d"
                      : "transparent",
                    color: value.isPrimary ? "#fff" : "#1a365d",
                    borderColor: "#1a365d",
                    minWidth: "140px",
                    display: "inline-block",
                  }}
                >
                  {value.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className='bg-secondary text-center py-2 px-5'>
      <div className='container text-muted'>
        <small>
          &copy; 2025{" "}
          <Link href='https://github.com/JadeShi-1018'>Jade Shi</Link>
          {/* . Open sourced with love under{" "}
          <Link href='https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE'>
            <a>MIT</a>
          </Link>{" "}
          License */}
        </small>
      </div>
    </footer>
  )
}
