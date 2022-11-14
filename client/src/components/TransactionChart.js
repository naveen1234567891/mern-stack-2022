import { scaleBand } from "@devexpress/dx-chart-core";
import {
  Animation,
  ArgumentScale,
  EventTracker,
} from "@devexpress/dx-react-chart";
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Tooltip,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import * as React from "react";

function TransactionChart({ data }) {
  const chartData = data.map((item) => {
    // item.day = dayjs()
    //   .month(item._id - 1)
    //   .format("DD");
    item.month = dayjs()
      .month(item._id - 1)
      .format("MMMM");
    // item.year = dayjs()
    //   .month(item._id - 1)
    //   .format("YYYY");
    return item;
  });
  return (
    <Paper sx={{ marginTop: 5 }}>
      <Chart data={chartData}>
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis />
        {/* <BarSeries valueField="totalExpenses" argumentField="day" /> */}
        <BarSeries valueField="totalExpenses" argumentField="month" />
        {/* <BarSeries valueField="totalExpenses" argumentField="year" /> */}
        <Animation />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
}

export default TransactionChart;