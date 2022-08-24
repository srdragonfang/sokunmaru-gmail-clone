import React from 'react'

function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && "section--selected"}`}
    style={{
        borderBottom: `3px solid ${selected && color}`,
        color: `${selected && color} `
    }}
    >
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default Section