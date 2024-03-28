"use client";
import React, { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

import { validationSchema } from "@/utils/validations";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { useToast } from "@/components/ui/use-toast";

const FormValues = {
  name: "",
  email: "",
  message: "",
};

const Form = () => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Send email using Nodemailer
      setIsLoading(true);

      toast({
        title: "Sending email...",
      });

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset form
      resetForm();

      toast({
        title: "Email submitted successfully!",
      });
    } catch (error) {
      // Handle error
      toast({
        title: "Failed to send message",
      });
      console.error("Failed to send message: ", error);
    } finally {
      // Enable submit button
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={handleSubmit}
    >
      <FormikForm>
        <div className="flex flex-col gap-y-4">
          {/* input */}
          <div className="relative flex items-center">
            <Field
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              className="flex h-[54px] w-full rounded-[5px] border border-input bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <User className="absolute right-6" size={20} />
          </div>
          <ErrorMessage name="name" component="div" className="text-red-500" />
          {/* input */}
          <div className="relative flex items-center">
            <Field
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="flex h-[54px] w-full rounded-[5px] border border-input bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />

            <MailIcon className="absolute right-6" size={20} />
          </div>
          <ErrorMessage name="email" component="div" className="text-red-500" />
          {/* textarea */}
          <div className="relative flex items-center">
            <Field
              placeholder="Type Your Message Here"
              id="message"
              name="message"
              as="textarea"
              className="flex h-[120px] w-full rounded-[5px] border border-input bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />

            <MessageSquare className="absolute top-4 right-6" size={20} />
          </div>
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500"
          />
          <Button
            className="flex items-center gap-x-1 max-w-[166px]"
            type="submit"
            disabled={isLoading}
          >
            Let's Talk
            <ArrowRightIcon size={20} />
          </Button>
        </div>
      </FormikForm>
    </Formik>
  );
};

export default Form;
