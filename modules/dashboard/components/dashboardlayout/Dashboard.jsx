import React from "react";
import { Header } from "../../../../shared/components/heading/Header";
import { Slider } from "../sliderexp/Slider";
import { Income } from "../income/Income";
import { Expense } from "../expense/Expense";
//import { Chart } from "../graph/Chart";
import { ExpenseButton } from "../expbut/ExpenseButton";
import { TransactionButton } from "../transactionsbutton/TransactionButton";
import { Footer } from "../../../../shared/components/footing/Footer";

export const Dashboard = () => {
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <div className="slide">
        <Slider />
      </div>
      <div className="cont">
        <div className="row">
          <div className="col-6">
            <Income />
            <Expense />
          </div>
          <div className="col-6">
            <ExpenseButton />
            <TransactionButton />
          </div>
        </div>
      </div>
      <div className="foote">
        <Footer />
      </div>
    </div>
  );
};
