import React from 'react'

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag">
        {data.category.tag}
      </span>
      <p className="intro">{data.text}</p>
      <p className="learned">{data.learned}</p>
      <p className="created">{data.created}</p>
      <div className="textlink">
      <a href={data.link.url} target="_blank" rel="noopener noreferrer">
        {data.link.text}
      </a>
      </div>
      <span className="circle"></span>
    </div>
  </div>
)

export default TimelineItem