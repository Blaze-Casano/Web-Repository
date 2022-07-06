import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>리뷰 평가 모음</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>너무 좋다는 평가</p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Harry Kane</h4>
              <span>English football player</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>DB에서 끌어와야</p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>이름같은거</h4>
              <span>직업같은거</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>좋다는 평가</p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>사람 이름</h4>
              <span>CEO</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
