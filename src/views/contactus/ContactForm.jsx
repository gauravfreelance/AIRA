import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Colors from "../../common/Colors";
import ESRselect from "../../components/esinputs/ESRSelect";
import ESSimpleTextArea from "../../components/esinputs/ESSimpleTextArea";
import ESSimpleTextInput from "../../components/esinputs/ESSimpleTextInput";
import { countryOptions } from "./countryOptions";
import { industryOptions } from "./industryOptions";

let CONTACTFIELDS = [
  {
    name: "first_name",
    label: "First Name",
    input_type: "text",
    required: true,
    gridValue: undefined,
  },
  {
    name: "last_name",
    label: "Last Name",
    input_type: "text",
    required: true,
    gridValue: undefined,
  },
  {
    name: "phone",
    label: "Phone",
    input_type: "number",
    required: true,
    gridValue: undefined,
  },
  {
    name: "email",
    label: "Email",
    input_type: "email",
    required: true,
    gridValue: undefined,
  },
];

const ContactForm = () => {
  const methods = useForm({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    country: "",
    industry: "",
    message: "",
  });

  return (
    <Box sx={{ backgroundColor: "#F8F9FB", py: 4 }}>
      <Box sx={{ margin: "0 auto", maxWidth: "50%" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontFamily: "Montserrat",
            fontSize: "large",
            fontWeight: 600,
          }}
          textAlign="center"
        >
          Have an Enquiry ?{" "}
          <span style={{ color: Colors.airaSecondary }}>
            Please Write To Us
          </span>
        </Typography>
        <FormProvider {...methods}>
          <Grid container spacing={2}>
            {CONTACTFIELDS.map((fieldItem) => {
              return <ESSimpleTextInput {...fieldItem} key={fieldItem.name} />;
            })}
            <ESRselect
              name="country"
              options={countryOptions}
              placeholder="Select Country"
            />
            <ESRselect
              name="industry"
              options={industryOptions}
              placeholder="Select Industry"
            />
            <ESSimpleTextArea
              name="message"
              label="Message"
              input_type="message"
              required
              rows={5}
              gridValue={{
                xs: 12,
              }}
            />
            <Grid item xs={12}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="declaration"
                />
                <label
                  className="form-check-label"
                  for="declaration"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  I would like to receive communications about AIRA tailored to
                  my interests and preferences, including latest news about
                  products, services, events and promotions. For more
                  information, please see our Privacy Policy
                </label>
              </div>
            </Grid>
          </Grid>
        </FormProvider>
        <Stack
          direction="row"
          alignItems="row-reverse"
          justifyContent="flex-end"
        >
          <div>
            <Button
              size="small"
              variant="contained"
              color="warning"
              sx={{
                backgroundColor: Colors.airaSecondary,
                minWidth: "100px",
                mt: 2,
              }}
            >
              Submit
            </Button>
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactForm;
