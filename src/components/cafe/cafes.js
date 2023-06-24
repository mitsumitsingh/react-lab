import React, { useEffect } from "react";
import classNames from "classnames";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function Cafes(props) {
  const { classes } = props;

  useEffect(() => {}, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div>
        Free Template for building a SaaS app using Material-UI Lorem ipsum
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt Free Template for building a SaaS app using Material-UI
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt Free Template for building a SaaS app using
        Material-UI Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt Free Template for building a SaaS app
        using Material-UI Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt Free Template for building
        a SaaS app using Material-UI Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      </div>
      <div>
        Free Template for building a SaaS app using Material-UI Lorem ipsum
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt Free Template for building a SaaS app using Material-UI
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt Free Template for building a SaaS app using
        Material-UI Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt Free Template for building a SaaS app
        using Material-UI Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt Free Template for building
        a SaaS app using Material-UI Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      </div>
      <div>
        Free Template for building a SaaS app using Material-UI Lorem ipsum
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt Free Template for building a SaaS app using Material-UI
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt Free Template for building a SaaS app using
        Material-UI Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt Free Template for building a SaaS app
        using Material-UI Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt Free Template for building
        a SaaS app using Material-UI Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      </div>
    </Box>
  );
}

export default withStyles(styles, { withTheme: true })(Cafes);
