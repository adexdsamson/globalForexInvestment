import React from "react";
import Invest from "../../Components/list";
import { Box, GridList, makeStyles } from "@material-ui/core";


const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    justifyItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    justifyContent: 'space-between',
  },
}))

const InvestList = ({ views, onPay, onBit }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {views.map(view => {
          return (
            <Invest
              earn={view.earn} 
              month={view.month}
              day={view.day}
              key={view.id}
              id={view.id}
              name={view.name}
              amount={view.amount}
              pay={() => onPay(view.id)}
              bitcoin={() => onBit(view.id)}
            />
          );
        })}
      </GridList>
    </Box>
  );
};

export default InvestList;
