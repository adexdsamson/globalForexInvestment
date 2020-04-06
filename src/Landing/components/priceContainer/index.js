import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles({
  priceBlock: {
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    padding: "3rem .8rem 2.8rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    position: "relative",
    margin: 12
  },
  priceTitle: {
    paddingBottom: "1.4rem",
    fontSize: "2.4rem",
    color: "#2b98f0",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    position: "relative",
    "&:after": {
      display: "block",
      backgroundColor: "rgba(0, 24, 53, 0.3)",
      width: 80,
      height: 3,
      position: "absolute",
      left: "50%",
      bottom: 0,
      marginLeft: -40
    }
  },
  planPrice: {
    fontFamily: "'Oswald', sans-serif",
    color: "#001835",
    fontSize: "3.5rem",
    lineHeight: 1,
    marginTop: "1.2rem",
    marginBottom: 12
  },
  priceMonth: {
    marginBottom: "1.2rem",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "1.1rem",
    color: "#2b98f0"
  },
  priceBott: {
    paddingTop: "2.4rem",
    paddingLeft: "3rem",
    paddingRight: "3rem"
  },
  features: {
    listStyle: "none",
    fontFamily: "'Raleway', sans-serif",
    fontSize: ".9rem",
    color: "rgba(0, 0, 0, 0.5)",
    margin: "0 0 4.2rem 0"
  },
  li: {
    padding: ".6rem 0",
    borderBottom: "1px solid rgba(63, 80, 96, 0.15)"
  },
  strong: {
    fontFamily: '"roboto-black", serif',
    color: "#001835",
    marginRight: 5
  },
  button: {
    background: "#001835",
    color: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "uppercase",
    height: "4rem !important",
    lineHeight: "3rem !important",
    padding: "0rem 3rem !important",
    "&:hover": {
      border: "1px solid #001835",
      background: "transparent",
      color: "#001835"
    }
  },
  button2: {
    background: "#001835",
    color: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "uppercase",
    height: "2rem !important",
    lineHeight: "1rem !important",
    padding: "0rem 1rem !important",
    "&:hover": {
      border: "1px solid #001835",
      background: "transparent",
      color: "#001835"
    }
  }
});

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PriceContainer = ({ title, price, earn, month, day, pay }) => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className={classes.priceBlock}>
        <div>
          <Typography className={classes.priceTitle}>{title}</Typography>
          <Typography className={classes.planPrice}>
            <sup>&#8358;</sup>
            {price}
          </Typography>
        </div>

        <div className={classes.priceBott}>
          <ul className={classes.features}>
            <li className={classes.li}>
              <strong className={classes.strong}>Earn</strong> &#8358;{earn}
            </li>
            <li className={classes.li}>
              <strong className={classes.strong}>Months</strong> {month}
            </li>
            <li className={classes.li}>
              <strong className={classes.strong}>Days</strong> {day}
            </li>
          </ul>
          <button onClick={pay} className={classes.button}>
            Purchase
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default PriceContainer;
