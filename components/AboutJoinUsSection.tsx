"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhyJoinUs = () => {
  const slides = [
    {
      title: "A Trusted Legacy",
      desc: "With over three decades of industry leadership, joining Saba Group means being part of a respected name known for reliability and commitment.",
    },
    {
      title: "Collaborative Culture",
      desc: "We foster a culture of respect, teamwork, and accountability. With offices across India and operations abroad, you'll be part of a networked yet close-knit team.",
    },
    {
      title: "Growth & Learning",
      desc: "We encourage continuous learning and professional development. Our collaborative work environment supports your journey till performance.",
    },
    {
      title: "Global Opportunities",
      desc: "Being part of Saba Group opens doors to opportunities worldwide, allowing you to grow and contribute on a global scale.",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      <Typography
        variant="h5"
        sx={{
            fontSize:{sm:"1rem",md:"2.25rem"},
          fontWeight: "bold",
          mb: {sm:1,md:4},
        }}
      >
        Why <span style={{ color: "#10562C" }}>join Us</span>?
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        style={{ maxWidth: "700px" }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <Paper className="cursor-pointer"
              elevation={3}
              sx={{
                p: 5,
                mx: "auto",
                mb:3,
                borderRadius: 2,
                maxWidth: {sm:"200px",md:"500px"},
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 4 , fontSize:{sm:"0.5rem",md:"1rem"},}}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "gray" }}>
                {item.desc}
              </Typography>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ccc !important; 
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #10562C !important; 
        }
      `}</style>
    </Box>
  );
};

export default WhyJoinUs;
