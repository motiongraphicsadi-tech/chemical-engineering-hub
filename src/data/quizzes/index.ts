import batchVsContinuousProcess 
from "./industrial-knowledge/industry-basics/batch-vs-continuous-process";

import typesOfChemicalIndustries
from "./industrial-knowledge/industry-basics/types-of-chemical-industries";

import upstreamDownstreamProcessing
from "./industrial-knowledge/industry-basics/upstream-downstream-processing";

import plantHierarchy
from "./industrial-knowledge/industry-basics/plant-hierarchy";

import departmentsInaPlant
from "./industrial-knowledge/industry-basics/departments-in-a-plant";

import rolesOfChemicalEngineers
from "./industrial-knowledge/industry-basics/roles-of-chemical-engineers";

import alarmsAndInterlocks
from "./industrial-knowledge/operations/alarms-and-interlocks";

import continuousPlantOperation
from "./industrial-knowledge/operations/continuous-plant-operation";

import controlRoomBasics
from "./industrial-knowledge/operations/control-room-basics";

import dcsOverview
from "./industrial-knowledge/operations/dcs-overview";

import shiftSystem
from "./industrial-knowledge/operations/shift-system";

import sops
from "./industrial-knowledge/operations/sops";

import startupShutdown
from "./industrial-knowledge/operations/startup-shutdown";

import troubleshootingBasics
from "./industrial-knowledge/operations/troubleshooting-basics";

import utilitySystems
from "./industrial-knowledge/operations/utility-systems";

/* Equipment Imports */

import agitators
from "./industrial-knowledge/equipments/agitators";

import heatExchanger
from "./industrial-knowledge/equipments/heat-exchanger";

import boilers
from "./industrial-knowledge/equipments/boilers";

import compressors
from "./industrial-knowledge/equipments/compressors";

import coolingTowers
from "./industrial-knowledge/equipments/cooling-towers";

import distillationColumns
from "./industrial-knowledge/equipments/distillation-columns";

import filters
from "./industrial-knowledge/equipments/filters";

import pipingSystems
from "./industrial-knowledge/equipments/piping-systems";

import pumps
from "./industrial-knowledge/equipments/pumps";

import reactors
from "./industrial-knowledge/equipments/reactors";

import tanks
from "./industrial-knowledge/equipments/tanks";

import valves
from "./industrial-knowledge/equipments/valves";

//uilities 

import boilerBasics
from "./industrial-knowledge/utilities/boiler-basics";

import chilledWater
from "./industrial-knowledge/utilities/chilled-water";

import compressedAir
from "./industrial-knowledge/utilities/compressed-air";

import coolingWaterSystem
from "./industrial-knowledge/utilities/cooling-water-system";

import hvacBasics
from "./industrial-knowledge/utilities/hvac-basics";

import nitrogenSystem
from "./industrial-knowledge/utilities/nitrogen-system";

import powerDistribution
from "./industrial-knowledge/utilities/power-distribution";

import steamSystem
from "./industrial-knowledge/utilities/steam-system";

import vacuumSystem
from "./industrial-knowledge/utilities/vacuum-system";

//hazard-analysis

import bowTieAnalysis
from "./industrial-safety/hazard-analysis/bow-tie-analysis";

import failureScenarios
from "./industrial-safety/hazard-analysis/failure-scenarios";

import hazopIntroduction
from "./industrial-safety/hazard-analysis/hazop-introduction";

import incidentReporting
from "./industrial-safety/hazard-analysis/incident-reporting";


import jobSafetyAndHazardAnalysis
from "./industrial-safety/hazard-analysis/job-safety-&-hazard-analysis";

import nearMissInvestigation
from "./industrial-safety/hazard-analysis/near-miss-investigation";

import riskMatrix
from "./industrial-safety/hazard-analysis/risk-matrix";

import rootCauseAnalysis
from "./industrial-safety/hazard-analysis/root-cause-analysis";

import silBasics
from "./industrial-safety/hazard-analysis/sil-basics";

import whatIfAnalysis
from "./industrial-safety/hazard-analysis/what-if-analysis";

// ipc //

import advancedControlStrategies from "./core-subjects/ipc/advanced-control-strategies";
import closedLoopControl from "./core-subjects/ipc/closed-loop-control";
import controlValves from "./core-subjects/ipc/control-valves";
import controllerTuning from "./core-subjects/ipc/controller-tuning";
import controllers from "./core-subjects/ipc/controllers";
import dynamicSystems from "./core-subjects/ipc/dynamic-systems";
import firstOrderSystemsBasics from "./core-subjects/ipc/first-order-systems-basics";
import firstOrderSystemsExamples from "./core-subjects/ipc/first-order-systems-examples";
import firstOrderSystemsResponses from "./core-subjects/ipc/first-order-systems-responses";
import inverseResponse from "./core-subjects/ipc/inverse-response";
import ipcBasics from "./core-subjects/ipc/ipc-basics";
import laplaceTransformApplications from "./core-subjects/ipc/laplace-transform-applications";
import laplaceTransformFundamentals from "./core-subjects/ipc/laplace-transform-fundamentals";
import processModeling from "./core-subjects/ipc/process-modeling";
import secondOrderSystemsBasics from "./core-subjects/ipc/second-order-systems-basics";
import secondOrderSystemsOscillatoryBehavior from "./core-subjects/ipc/second-order-systems-oscillatory-behavior";
import secondOrderSystemsPerformanceParameter from "./core-subjects/ipc/second-order-systems-performance-parameter";
import stabilityAnalysis from "./core-subjects/ipc/stability-analysis";



export const quizzes = {

  /* Industry Basics */

  "batch-vs-continuous-process":
    batchVsContinuousProcess,

  "types-of-chemical-industries":
    typesOfChemicalIndustries,

  "upstream-downstream-processing":
    upstreamDownstreamProcessing,

  "plant-hierarchy":
    plantHierarchy,

  "departments-in-a-plant":
    departmentsInaPlant,

  "roles-of-chemical-engineers":
    rolesOfChemicalEngineers,

  /* Operations */

  "alarms-and-interlocks":
    alarmsAndInterlocks,

  "continuous-plant-operation":
    continuousPlantOperation,

  "control-room-basics":
    controlRoomBasics,

  "dcs-overview":
    dcsOverview,

  "shift-system":
    shiftSystem,

  "sops":
    sops,

  "startup-shutdown":
    startupShutdown,

  "troubleshooting-basics":
    troubleshootingBasics,

  "utility-systems":
    utilitySystems,

  /* Equipments */

  "agitators":
    agitators,

  "heat-exchanger":
    heatExchanger,

  "boilers":
    boilers,

  "compressors":
    compressors,

  "cooling-towers":
    coolingTowers,

  "distillation-columns":
    distillationColumns,

  "filters":
    filters,

  "piping-systems":
    pipingSystems,

  "pumps":
    pumps,

  "reactors":
    reactors,

  "tanks":
    tanks,

  "valves":
    valves,

    //utilities

"boiler-basics":
  boilerBasics,

"chilled-water":
  chilledWater,

"compressed-air":
  compressedAir,

"cooling-water-system":
  coolingWaterSystem,

"hvac-basics":
  hvacBasics,

"nitrogen-system":
  nitrogenSystem,

"power-distribution":
  powerDistribution,

"steam-system":
  steamSystem,

"vacuum-system":
  vacuumSystem,

  //hazard-analysis

"hazop-introduction":
  hazopIntroduction,

"what-if-analysis":
  whatIfAnalysis,

"job-safety-&-hazard-analysis":
  jobSafetyAndHazardAnalysis,

"risk-matrix":
  riskMatrix,

"sil-basics":
  silBasics,

"root-cause-analysis":
  rootCauseAnalysis,

"near-miss-investigation":
  nearMissInvestigation,

"incident-reporting":
  incidentReporting,

"bow-tie-analysis":
  bowTieAnalysis,

"failure-scenarios":
  failureScenarios,  

  // ipc //

  "advanced-control-strategies": advancedControlStrategies,
  "closed-loop-control": closedLoopControl,
  "control-valves": controlValves,
  "controller-tuning": controllerTuning,
  "controllers": controllers,
  "dynamic-systems": dynamicSystems,
  "first-order-systems-basics": firstOrderSystemsBasics,
  "first-order-systems-examples": firstOrderSystemsExamples,
  "first-order-systems-responses": firstOrderSystemsResponses,
  "inverse-response": inverseResponse,
  "ipc-basics": ipcBasics,
  "laplace-transform-applications": laplaceTransformApplications,
  "laplace-transform-fundamentals": laplaceTransformFundamentals,
  "process-modeling": processModeling,
  "second-order-systems-basics": secondOrderSystemsBasics,
  "second-order-systems-oscillatory-behavior": secondOrderSystemsOscillatoryBehavior,
  "second-order-systems-performance-parameter":secondOrderSystemsPerformanceParameter,
  "stability-analysis": stabilityAnalysis,
};