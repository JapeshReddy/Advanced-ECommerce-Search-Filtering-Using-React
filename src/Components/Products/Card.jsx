import React from 'react'

function Card(props) {
  return (
    <section className="card">
        <img
          src={props.ele.img}
          alt=""
          style={{width:227,height:134}}
        />
        <section className="card-details">
          <h1>{props.ele.title}</h1>
          <div className="reviews">
            <i class="bi bi-star-fill ratings"></i>
            <i class="bi bi-star-fill ratings"></i>
            <i class="bi bi-star-fill ratings"></i>
            <i class="bi bi-star-fill ratings"></i>
            <span>{props.ele.reviews}</span>
          </div>
          <div className="footer">
            <div className="price">
              <del>{props.ele.prevPrice}</del>
              <span>{props.ele.newPrice}</span>
            </div>
            <i class="bi bi-bag-heart-fill"></i>
          </div>
        </section>
      </section>
  )
}

export default Card