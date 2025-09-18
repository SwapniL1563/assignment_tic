"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Paper } from "@mui/material";

export default function FAQSection() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs = [
    {
      q: "What does Saba Group specialize in?",
      a: "Saba Group specializes in manufacturing and distributing high-quality chemicals across multiple industries.",
    },
    {
      q: "Where is Saba Group headquartered?",
      a: "Saba Group is headquartered in Chennai.",
    },
    {
      q: "What industries does Saba Group serve?",
      a: "We serve industries including pharmaceuticals, agriculture, textiles, and more.",
    },
    {
      q: "Does Saba Group manufacture its own chemicals?",
      a: "Yes, Saba Group manufactures its own range of chemicals to ensure consistent quality.",
    },
  ];


  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: {sm:"3",md:"6"} }}>
      <Typography
        variant="h6"
        sx={{ fontSize:{sm:"1.25rem",md:"2.25rem"},fontWeight: "bold", textAlign: "center", mb: 3 }}
      >
        Frequently asked{" "}
        <span style={{ color: "#10562C" }}>Questions</span>
      </Typography>

      {faqs.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid #ddd",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <RemoveIcon sx={{ color: "#10562C" }} />
              ) : (
                <AddIcon sx={{ color: "#10562C" }} />
              )
            }
          >
            <Typography>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "gray" }}>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Paper
        variant="outlined"
        sx={{
          mt:{sm:"2",md:"3"},
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",marginTop:"4rem"
        }}
      >
        <Typography sx={{fontSize:{sm:"0.8rem",md:"1.05rem"}}} variant="body2">
          Can't find what you're looking for? <br className="md:block hidden" />
          Contact us here:
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "green",
            color: "#10562C",
            textTransform: "none",
            fontWeight: "bold",
          }}
          href="tel:+918179987444"
        >
          +91-8179987444
        </Button>
      </Paper>
    </Box>
  );
}
