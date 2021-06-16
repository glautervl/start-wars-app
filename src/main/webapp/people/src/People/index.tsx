import React, { useEffect, useState } from "react";

import { AxiosError, AxiosResponse } from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { PagedResults, People } from "../models";
import axios from "../axios";

import { Container, StyledLink } from "./styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PeopleList: React.FunctionComponent<{}> = () => {
  const [rowData, setRowData] = useState<PagedResults<People>>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    axios({ method: "GET" })
      .then((res: AxiosResponse<PagedResults<People>>) => {
        setRowData(res.data);
        setError("");
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        setIsLoading(false);
        setError(err.message);
        setInterval(() => setError(""), 5000);
      });
  }, []);

  const hasError: boolean = !isLoading && Boolean(error);

  if (hasError) {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={hasError}
        message={error}
        key="top center"
      >
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error}
        </MuiAlert>
      </Snackbar>
    );
  }

  let bodyToRender: JSX.Element | JSX.Element[];
  if (isLoading) {
    bodyToRender = (
      <TableRow>
        <TableCell colSpan={4} align="center">
          <CircularProgress />
        </TableCell>
      </TableRow>
    );
  } else if (!isLoading && rowData.count > 0) {
    bodyToRender = rowData.results.map((data: People) => (
      <TableRow key={data.name}>
        <TableCell align="center">{data.name}</TableCell>
        <TableCell align="center">{data.homeworld}</TableCell>
        <TableCell align="center">{data.gender}</TableCell>
        <TableCell align="center">{data.created}</TableCell>
      </TableRow>
    ));
  } else {
    bodyToRender = (
      <TableRow>
        <TableCell colSpan={4} align="center">
          Data not found.
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <Container>
        <StyledLink to="/about">About</StyledLink>
      </Container>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Home World</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{bodyToRender}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PeopleList;
