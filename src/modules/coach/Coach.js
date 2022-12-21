import { Route, Routes } from "react-router-dom";
import Missing from "../shared/Missing";
import CoachLayout from "./CoachLayout";
import { Sidebar } from "../../layout/sidebar/Sidebar";
import React from "react";
import CoachOnboard from "../auth/Onboard/CoachOnboard";
import Steps from "./onboard/Steps";
import Logout from "../logout/Logout";
import CoachDashboard from "./dashboard/Dashboard";

function Coach() {
  return <CoachDashboard />;
}

export default Coach;
