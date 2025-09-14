import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CreateInvoice from "../components/CreateInvoice";
import IncomeChart from "../components/IncomeChart";
import InvoiceCard from "../components/InvoiceCard";
import TimePeriodSelector from "../components/TimePeriodSelector";
import EarningsSummary from "../components/EarningSummary";
import PaymentStatus from "../components/PaymentStatus";
import Footer from "../components/footer";
import { Collapse, Button } from "react-bootstrap";

export default function Dashboard() {
  const [invoices, setInvoices] = useState([]);
  const [open, setOpen] = useState(false);

  // Load invoices from localStorage on mount
  useEffect(() => {
    const savedInvoices = localStorage.getItem("invoices");
    if (savedInvoices && JSON.parse(savedInvoices).length > 0) {
      setInvoices(JSON.parse(savedInvoices));
    } else {
      // default data
      const defaultInvoices = [
        {
          client: "Client A",
          amount: "2000",
          date: "2025-09-10",
          status: "Paid",
        },
        {
          client: "Client B",
          amount: "1500",
          date: "2025-09-11",
          status: "Overdue",
        },
        {
          client: "Client C",
          amount: "1000",
          date: "2025-09-12",
          status: "Unpaid",
        },
        {
          client: "Client D",
          amount: "500",
          date: "2025-09-13",
          status: "Partially Paid",
        },
        {
          client: "Client E",
          amount: "800",
          date: "2025-09-14",
          status: "Draft",
        },
      ];
      setInvoices(defaultInvoices);
      localStorage.setItem("invoices", JSON.stringify(defaultInvoices)); // save only once
    }
  }, []);

  // Save invoices to localStorage whenever they change
  useEffect(() => {
    if (invoices.length > 0) {
      localStorage.setItem("invoices", JSON.stringify(invoices));
    }
  }, [invoices]);

  const handleAddInvoice = (newInvoice) => {
    setInvoices((prev) => [...prev, newInvoice]);
  };

  return (
    <div
      className="container-sm"
      style={{
        maxWidth: "450px",
        backgroundColor: "#D6B4FC",
        minHeight: "100vh",
      }}
    >
      {/* Violet Header */}
      <Header />

      {/* White container overlapping header */}
      <div
        className="bg-white shadow-sm"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          marginTop: "-10px",
          overflow: "hidden",
        }}
      >
        <div className="p-3">
          <CreateInvoice onAddInvoice={handleAddInvoice} />

          <div
            style={{
              color: "#9B6FD7",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "13px",
              marginTop: "2rem",
              textAlign: "center",
            }}
          >
            Or Upload an Existing Invoice and Set Payment Reminder
          </div>

          <TimePeriodSelector />
          <EarningsSummary />
          <PaymentStatus />
          <IncomeChart />

          {/* Collapsible Your Invoices */}
          <div className="my-3">
            <Button
              variant="light"
              className="w-100 d-flex justify-content-between align-items-center border-0"
              onClick={() => setOpen(!open)}
              aria-controls="invoices-collapse"
              aria-expanded={open}
              style={{ color: "#aaa", fontWeight: "medium" }}
            >
              <span>Your Invoices</span>
              <span style={{ color: "black" }}>{open ? "▲" : "▼"}</span>
            </Button>

            <Collapse in={open}>
              <div id="invoices-collapse" className="mt-2">
                {invoices.map((inv, i) => (
                  <div
                    key={i}
                    className="p-3 mb-2 bg-white shadow-sm rounded-3 border"
                  >
                    <InvoiceCard {...inv} />
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
