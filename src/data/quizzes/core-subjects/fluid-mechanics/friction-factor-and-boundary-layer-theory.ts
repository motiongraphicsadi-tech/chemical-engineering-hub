const quiz = [

    {
      question:
        "The friction factor is a:",
  
      options: [
        "Pressure measurement device",
        "Dimensionless quantity",
        "Flow rate coefficient",
        "Velocity ratio",
      ],
  
      answer:
        "Dimensionless quantity",
    },
  
    {
      question:
        "The friction factor is primarily used to calculate:",
  
      options: [
        "Heat transfer rate",
        "Pressure losses in pipes",
        "Fluid density",
        "Surface tension",
      ],
  
      answer:
        "Pressure losses in pipes",
    },
  
    {
      question:
        "Which equation uses the friction factor to determine head loss?",
  
      options: [
        "Bernoulli Equation",
        "Continuity Equation",
        "Darcy-Weisbach Equation",
        "Euler Equation",
      ],
  
      answer:
        "Darcy-Weisbach Equation",
    },
  
    {
      question:
        "For fully developed laminar flow, the friction factor is given by:",
  
      options: [
        "f = Re/64",
        "f = 64/Re",
        "f = Re²/64",
        "f = 1/Re",
      ],
  
      answer:
        "f = 64/Re",
    },
  
    {
      question:
        "The equation f = 64/Re is valid when:",
  
      options: [
        "Re > 4000",
        "Re < 2100",
        "2100 < Re < 4000",
        "Re = 4000",
      ],
  
      answer:
        "Re < 2100",
    },
  
    {
      question:
        "For turbulent flow, friction factor depends on:",
  
      options: [
        "Reynolds Number only",
        "Relative roughness only",
        "Reynolds Number and relative roughness",
        "Density only",
      ],
  
      answer:
        "Reynolds Number and relative roughness",
    },
  
    {
      question:
        "Which graphical tool is used to determine friction factors in turbulent flow?",
  
      options: [
        "Bernoulli Chart",
        "Moody Diagram",
        "T-s Diagram",
        "P-V Diagram",
      ],
  
      answer:
        "Moody Diagram",
    },
  
    {
      question:
        "The Moody Diagram relates friction factor with:",
  
      options: [
        "Reynolds Number and relative roughness",
        "Pressure and temperature",
        "Density and viscosity",
        "Flow rate and velocity",
      ],
  
      answer:
        "Reynolds Number and relative roughness",
    },
  
    {
      question:
        "Relative roughness is defined as:",
  
      options: [
        "D/ε",
        "ε/D",
        "Re/D",
        "μ/ρ",
      ],
  
      answer:
        "ε/D",
    },
  
    {
      question:
        "A larger value of relative roughness indicates:",
  
      options: [
        "A smoother pipe",
        "A rougher pipe",
        "Lower velocity",
        "Lower pressure drop",
      ],
  
      answer:
        "A rougher pipe",
    },
  
    {
      question:
        "The boundary layer forms because of:",
  
      options: [
        "Gravity",
        "Fluid viscosity",
        "Pressure only",
        "Temperature only",
      ],
  
      answer:
        "Fluid viscosity",
    },
  
    {
      question:
        "According to the no-slip condition, fluid velocity at the wall is:",
  
      options: [
        "Maximum",
        "Average",
        "Zero",
        "Infinite",
      ],
  
      answer:
        "Zero",
    },
  
    {
      question:
        "The boundary layer is the region where velocity changes from:",
  
      options: [
        "Maximum to zero",
        "Zero at the wall to free-stream velocity",
        "Average to zero",
        "Pressure head to velocity head",
      ],
  
      answer:
        "Zero at the wall to free-stream velocity",
    },
  
    {
      question:
        "Boundary layer thickness is commonly represented by:",
  
      options: [
        "τ",
        "μ",
        "δ",
        "ρ",
      ],
  
      answer:
        "δ",
    },
  
    {
      question:
        "As fluid moves downstream over a surface, boundary layer thickness generally:",
  
      options: [
        "Decreases",
        "Remains constant",
        "Increases",
        "Becomes zero",
      ],
  
      answer:
        "Increases",
    },
  
    {
      question:
        "A laminar boundary layer is characterized by:",
  
      options: [
        "Strong mixing",
        "Chaotic fluctuations",
        "Smooth velocity profile",
        "High turbulence intensity",
      ],
  
      answer:
        "Smooth velocity profile",
    },
  
    {
      question:
        "A turbulent boundary layer is characterized by:",
  
      options: [
        "No mixing",
        "Smooth layers only",
        "Strong mixing and velocity fluctuations",
        "Zero wall shear stress",
      ],
  
      answer:
        "Strong mixing and velocity fluctuations",
    },
  
    {
      question:
        "One advantage of a turbulent boundary layer is:",
  
      options: [
        "Lower drag",
        "Lower mixing",
        "Enhanced heat and mass transfer",
        "Zero pressure loss",
      ],
  
      answer:
        "Enhanced heat and mass transfer",
    },
  
    {
      question:
        "Skin friction drag originates from:",
  
      options: [
        "Gravity forces",
        "Wall shear stress",
        "Pressure difference only",
        "Buoyant force",
      ],
  
      answer:
        "Wall shear stress",
    },
  
    {
      question:
        "Understanding friction factors and boundary layers is important for:",
  
      options: [
        "Pipeline design",
        "Heat exchanger design",
        "Pressure drop estimation",
        "All of the Above",
      ],
  
      answer:
        "All of the Above",
    },
  
  ];
  
  export default quiz;