import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { PagedResults, Planet } from "../models";
import axios from "../axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Planets: React.FunctionComponent<{}> = () => {
  const [rowData, setRowData] = useState<PagedResults<Planet>>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const classes = useStyles();

  useEffect(() => {
    axios({ method: "GET" })
      .then((res) => setRowData(res.data))
      .catch(console.error);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Climate</TableCell>
            <TableCell align="right">Terrain</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.results.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.climate}</TableCell>
              <TableCell align="right">{row.terrain}</TableCell>
              <TableCell align="right">{row.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Planets;
