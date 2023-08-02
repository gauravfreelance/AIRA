import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Colors from "../../common/Colors";
import { STRAPI_API_URL, STRAPI_BASE_URL } from "../../network/network";

const Blog = (props) => {
  const {
    goBack,
    selectedBlog: { title, content, image },
  } = props;

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behaviour: "smooth",
    // });
  }, []);

  return (
    <Box sx={{ width: "70%", mx: "auto", my: 14 }}>
      <Stack>
        {/* <Stack
          direction="row"
          alignItems="center"
          gap={2}
          //justifyContent="center"
        >
          <IconButton
            onClick={() => {
              goBack();
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Stack> */}

        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            border: "1px",
            height: "500px",
            objectFit: "cover",
          }}
        />

        <Typography
          variant="h5"
          sx={{ fontWeight: 600, textAlign: "center", my: 2 }}
        >
          {title}
        </Typography>

        <Stack sx={{ my: 1, lineHeight: 2 }}>
          <ReactMarkdown
            transformImageUri={(uri) =>
              uri.startsWith("http") ? uri : `${STRAPI_BASE_URL}${uri}`
            }
          >
            {content}
          </ReactMarkdown>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Blog;
